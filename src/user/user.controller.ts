import {
  BadRequestException,
  Body,
  ConflictException,
  Controller,
  HttpException,
  HttpStatus,
  Patch,
  Post,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import {
  EmailSignInDto,
  EmailVerificationDto,
  RefreshAccessToken,
  RegisterDto,
  UpdateCanSendNotification,
  UpdateGameMode,
  UpdateMembershipSettings,
  UpdateName,
  UpdatePushNotificationTokenDto,
  UpdateTitle,
  UpdateUserExtraInfoDto,
} from './user.dto';
import * as bcrypt from 'bcrypt';
import { AuthGuard } from 'src/common/auth.guard';
import { TrimUserResponseInterceptor } from 'src/common/trim-response-interceptors';
import { generateVerificationToken } from './utils/email-token.util';
import { GmailService } from 'src/gmail/gmail.service';
import { JsonWebTokenError, JwtService, TokenExpiredError } from '@nestjs/jwt';
import { TokenPayload } from 'src/app.dto';

import {
  AuthProvider,
  Identity,
  InterestingRegionOrCountry,
  InterestingTopic,
  PoliticalStance,
  Role,
} from 'src/kysely/types';
import * as multer from 'multer';
import { GameService } from 'src/game/game.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { S3Service } from 'src/s3/s3.service';
import timeUtil from 'utils/timeUtil';
import { UnlockedTitle } from 'src/game/game.type';

const FRONTEND_URL = process.env.FRONTEND_URL;
const ACCESS_TOKEN_VALID_TIME = process.env.ACCESS_TOKEN_VALID_TIME;
const REFRESH_TOKEN_VALID_TIME = process.env.REFRESH_TOKEN_VALID_TIME;

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly gmailService: GmailService,
    private readonly gameService: GameService,
    private readonly jwtService: JwtService,
    private readonly s3Service: S3Service,
  ) {}

  @Post('signup/email')
  @UseInterceptors(TrimUserResponseInterceptor)
  async registerWithEmail(@Body() dto: RegisterDto) {
    if (!dto.email || !dto.password) {
      throw new BadRequestException('你沒有填寫電郵或密碼');
    }

    const existingUser = await this.userService.findByEmail(dto.email);
    if (existingUser) {
      throw new ConflictException('已有人使用此電郵註冊');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    let user = await this.userService.create({
      email: dto.email,
      password: hashedPassword,
      authProvider: AuthProvider.EMAIL,
      verificationToken: generateVerificationToken(), // Ensure your User entity includes this
    });
    if (!user) {
      throw new HttpException(
        'Failed to create user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    // Construct verification URL
    if (user.verificationToken) {
      const encodedEmail = encodeURIComponent(dto.email);
      const encodedToken = encodeURIComponent(user.verificationToken);
      const full_url = `${FRONTEND_URL}/email-verification/${encodedEmail}/${encodedToken}`;

      // Send verification email
      await this.gmailService.sendEmail({
        to: dto.email,
        subject: 'Email Verification For FourSides',
        text: 'Verify your Email For FourSides',
        html: `
        <div>
          <p>親愛的用戶您好，</p>
          <p>請透過以下連結驗證您的電子郵件地址：</p>
          <ul>
            <li>
              <a clicktracking="off" href="${full_url}" target="_blank">${full_url}</a>
            </li>
          </ul>
          <p>見方團隊敬上，</p>
          <p>此致敬禮</p>
        </div>
      `,
      });
    }
    return;
  }

  @Post('signin/email')
  @UseInterceptors(TrimUserResponseInterceptor)
  async emailSignin(@Body() dto: EmailSignInDto) {
    const { email, password } = dto;

    if (!email || !password) {
      throw new BadRequestException('沒有填寫電郵或密碼');
    }

    const user = await this.userService.findByEmail(email);

    if (!user) {
      console.error('wrong email');
      throw new HttpException('電郵或密碼錯誤', HttpStatus.UNAUTHORIZED);
    }
    if (!user.password) {
      throw new HttpException(
        'The returned user does not have the password value',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      console.error('wrong password');
      throw new HttpException('電郵或密碼錯誤', HttpStatus.UNAUTHORIZED);
    }

    if (!user.email) {
      throw new HttpException(
        'The returned user does not have an email!',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    const verified = await this.userService.findIfEmailVerified(user.email);
    if (!verified) {
      throw new HttpException('你還未驗證電郵', HttpStatus.UNAUTHORIZED);
    }

    // Generate JWT
    const { accessToken, refreshToken } =
      await this.generateTokensAndUpdateRefresh({
        id: user.id ?? undefined,
        authId: user.authId ?? '',
        email: user.email ?? undefined,
        role: user.role ?? undefined,
        avatarUrl: user.avatarUrl ?? undefined,
        displayName: user.displayName ?? undefined,
        chosenTitle: user.chosenTitle ?? '',
        onboardingNeeded: user.onboardingNeeded,
        gameMode: user.gameMode || false,
        canSendNotification: user.canSendNotification || false,
      });

    return {
      accessToken,
      refreshToken,
      user,
    };
  }

  @Post('signup/email/verification')
  async verifyGmail(@Body() dto: EmailVerificationDto) {
    const { email, token } = dto;
    const tokenInDB = await this.userService.findTokenByEmail(email);
    if (token === tokenInDB) {
      const verificationStatus =
        await this.userService.makeEmailVerified(email);
      console.log('verificationStatus:', verificationStatus);
      return verificationStatus;
    } else {
      throw new HttpException(
        'The token is malformed',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  @Post('signup/google')
  @UseInterceptors(TrimUserResponseInterceptor)
  async registerWithGoogle(@Body() dto: RegisterDto) {
    // Potential problem: relying on the frontend and CORS and not verifying the Google token on the backend
    if (!dto.providerId) {
      throw new HttpException(
        'Google providerId is undefined',
        HttpStatus.UNAUTHORIZED,
      );
    }
    if (!dto.email) {
      throw new HttpException(
        'Google email is undefined',
        HttpStatus.UNAUTHORIZED,
      );
    }
    let existingUser = await this.userService.findByProviderId(dto.providerId);
    console.log('existingUser:', existingUser);
    const isEmailAuth = await this.userService.checkIfEmailAuth(dto.email);
    if (isEmailAuth) {
      throw new HttpException(
        '你不應用Google登入，請轉用電郵直接登入',
        HttpStatus.CONFLICT,
      );
    }
    console.log('existingUser:', existingUser);

    const user = existingUser
      ? existingUser
      : await this.userService.create({
          email: dto.email,
          authProvider: AuthProvider.GOOGLE,
          providerId: dto.providerId,
          // potential problem: not relying on Google token to see if the gmail has been verified or not
          emailVerified: true,
          avatarUrl: dto.avatarUrl,
          displayName: dto.name ?? undefined,
        });
    console.log('user:', user);
    if (!user) {
      throw new HttpException(
        'The returned user is missing',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    const { accessToken, refreshToken, updatedUser } =
      await this.generateTokensAndUpdateRefresh({
        id: user.id ?? undefined,
        authId: user.authId ?? '',
        chosenTitle: user.chosenTitle ?? '',
        email: user.email ?? undefined,
        role: user.role ?? undefined,
        avatarUrl: user.avatarUrl ?? undefined,
        displayName: user.displayName ?? undefined,
        onboardingNeeded: user.onboardingNeeded,
        gameMode: user.gameMode || false,
        canSendNotification: user.canSendNotification || false,
      });

    return {
      accessToken,
      refreshToken,
      user: updatedUser,
    };
  }

  @Post('signup/apple')
  @UseInterceptors(TrimUserResponseInterceptor)
  async registerWithApple(@Body() dto: RegisterDto) {
    // Potential problem: relying on the frontend and CORS and not verifying the Google token on the backend
    if (dto.providerId == undefined) {
      throw new HttpException(
        'The providerId is missing',
        HttpStatus.UNAUTHORIZED,
      );
    }
    const existingUser = await this.userService.findByProviderId(
      dto.providerId,
    );
    const user = existingUser
      ? existingUser
      : await this.userService.create({
          email: dto.email,
          displayName: dto.name ?? undefined,
          authProvider: AuthProvider.APPLE,
          providerId: dto.providerId,
          emailVerified: true,
        });

    if (!user) {
      throw new HttpException(
        'Failed to create user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    const { accessToken, refreshToken, updatedUser } =
      await this.generateTokensAndUpdateRefresh({
        id: user.id ?? undefined,
        chosenTitle: user.chosenTitle ?? '',
        authId: user.authId ?? '',
        email: user.email ?? undefined,
        role: user.role ?? undefined,
        avatarUrl: user.avatarUrl ?? undefined,
        displayName: user.displayName ?? undefined,
        onboardingNeeded: user.onboardingNeeded,
        gameMode: user.gameMode ?? false,
        canSendNotification: user.canSendNotification || false,
      });

    console.log({
      accessToken,
      refreshToken,
      user: updatedUser,
    });

    return {
      accessToken,
      refreshToken,
      user: updatedUser,
    };
  }

  @UseGuards(AuthGuard)
  @Patch('update/push-notification-token')
  @UseInterceptors(TrimUserResponseInterceptor)
  async updatePushNotificationToken(
    @Body() dto: UpdatePushNotificationTokenDto,
    @Req() req: Request,
  ) {
    const payload: TokenPayload = req['user'];
    console.log('payload:', payload);
    return await this.userService.updatePushNotificationToken({
      userId: payload.userId,
      dto,
    });
  }

  @UseGuards(AuthGuard)
  @Patch('update/extra-info')
  @UseInterceptors(TrimUserResponseInterceptor)
  async updateUserExtraInfo(
    @Body() dto: UpdateUserExtraInfoDto,
    @Req() req: Request,
  ) {
    const payload: TokenPayload = req['user'];
    console.log('payload:', payload);
    return await this.userService.updateUserExtraInfo({
      id: payload.userId,
      dto,
    });
  }

  @UseGuards(AuthGuard)
  @Patch('update/fav-topics')
  @UseInterceptors(TrimUserResponseInterceptor)
  async updateUserFavTopics(
    @Body() dto: { topics: InterestingTopic[] },
    @Req() req: Request,
  ) {
    const payload: TokenPayload = req['user'];
    const result = await this.userService.updateUserFavTopics({
      id: payload.userId,
      dto,
    });

    if (result) {
      const unlockedTitle = await this.gameService.updateTitleProgress({
        userId: payload.userId,
        type: 'PROFILE_CHANGE_TOTAL',
      });

      return {
        ...result,
        unlockedTitles: unlockedTitle ? [unlockedTitle] : [],
      };
    }

    return result;
  }

  @UseGuards(AuthGuard)
  @Patch('update/profile-pic')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: multer.memoryStorage(), // 🔥 store file in memory as buffer
      limits: { fileSize: 5 * 1024 * 1024 }, // optional: max file size 5MB
    }),
  )
  async updateProfilePic(
    @UploadedFile() file: Express.Multer.File,
    @Req() req: Request,
  ) {
    const payload: TokenPayload = req['user'];
    const url = await this.s3Service.uploadBuffer(file);
    const result = await this.userService.updateProfilePic({
      url: url,
      userId: payload.userId,
    });

    if (result) {
      const unlockedTitle = await this.gameService.updateTitleProgress({
        userId: payload.userId,
        type: 'PROFILE_CHANGE_TOTAL',
      });

      return {
        ...result,
        unlockedTitles: unlockedTitle ? [unlockedTitle] : [],
      };
    }

    return {
      url,
    };
  }

  @UseGuards(AuthGuard)
  @Patch('update/fav-regions')
  @UseInterceptors(TrimUserResponseInterceptor)
  async updateUserFavRegions(
    @Body() dto: { regionsInterestedIn: InterestingRegionOrCountry[] },
    @Req() req: Request,
  ) {
    const payload: TokenPayload = req['user'];
    console.log('payload:', payload);
    const result = await this.userService.updateUserFavRegions({
      id: payload.userId,
      dto,
    });
    if (result) {
      const unlockedTitle = await this.gameService.updateTitleProgress({
        userId: payload.userId,
        type: 'PROFILE_CHANGE_TOTAL',
      });

      return {
        ...result,
        unlockedTitles: unlockedTitle ? [unlockedTitle] : [],
      };
    }

    return result;
  }

  @UseGuards(AuthGuard)
  @Patch('update/identity')
  @UseInterceptors(TrimUserResponseInterceptor)
  async updateUserIdentity(
    @Body() dto: { identity: Identity },
    @Req() req: Request,
  ) {
    const payload: TokenPayload = req['user'];
    const result = await this.userService.updateUserIdentity({
      id: payload.userId,
      dto,
    });

    if (result) {
      const unlockedTitle = await this.gameService.updateTitleProgress({
        userId: payload.userId,
        type: 'PROFILE_CHANGE_TOTAL',
      });

      return {
        ...result,
        unlockedTitles: unlockedTitle ? [unlockedTitle] : [],
      };
    }

    return result;
  }

  @UseGuards(AuthGuard)
  @Patch('update/political-stance')
  @UseInterceptors(TrimUserResponseInterceptor)
  async updateUserPoliticalIdentity(
    @Body() dto: { politicalStance: PoliticalStance },
    @Req() req: Request,
  ) {
    console.log('dto:', dto);
    const payload: TokenPayload = req['user'];
    const result = await this.userService.updateUserPoliticalStance({
      id: payload.userId,
      dto,
    });

    if (result) {
      const unlockedTitle = await this.gameService.updateTitleProgress({
        userId: payload.userId,
        type: 'PROFILE_CHANGE_TOTAL',
      });

      return {
        ...result,
        unlockedTitles: unlockedTitle ? [unlockedTitle] : [],
      };
    }

    return result;
  }

  @UseGuards(AuthGuard)
  @Patch('update/name')
  @UseInterceptors(TrimUserResponseInterceptor)
  async updateUserName(@Body() dto: UpdateName, @Req() req: Request) {
    console.log('dto:', dto);
    const payload: TokenPayload = req['user'];
    const result = await this.userService.updateUserName({
      id: payload.userId,
      dto,
    });

    if (result) {
      const unlockedTitle = await this.gameService.updateTitleProgress({
        userId: payload.userId,
        type: 'PROFILE_CHANGE_TOTAL',
      });

      return {
        ...result,
        unlockedTitles: unlockedTitle ? [unlockedTitle] : [],
      };
    }

    return result;
  }

  @UseGuards(AuthGuard)
  @Patch('update/title')
  @UseInterceptors(TrimUserResponseInterceptor)
  async updateUserTitle(@Body() dto: UpdateTitle, @Req() req: Request) {
    console.log('dto:', dto);
    const payload: TokenPayload = req['user'];
    const result = await this.userService.updateUserTitle({
      id: payload.userId,
      dto,
    });

    if (result) {
      const unlockedTitle = await this.gameService.updateTitleProgress({
        userId: payload.userId,
        type: 'PROFILE_CHANGE_TOTAL',
      });

      return {
        ...result,
        unlockedTitles: unlockedTitle ? [unlockedTitle] : [],
      };
    }

    return result;
  }

  @UseGuards(AuthGuard)
  @Patch('update/game-mode')
  @UseInterceptors(TrimUserResponseInterceptor)
  async updateGameOn(@Body() dto: UpdateGameMode, @Req() req: Request) {
    const payload: TokenPayload = req['user'];
    return await this.userService.updateGameOn({
      id: payload.userId,
      gameMode: dto.gameMode,
    });
  }

  @UseGuards(AuthGuard)
  @Patch('update/can-send-notification')
  @UseInterceptors(TrimUserResponseInterceptor)
  async updateCanSendNotification(
    @Body() dto: UpdateCanSendNotification,
    @Req() req: Request,
  ) {
    const payload: TokenPayload = req['user'];
    return await this.userService.updateCanSendNotification({
      id: payload.userId,
      canSendNotification: dto.canSendNotification,
    });
  }

  @UseGuards(AuthGuard)
  @Patch('update/membership-settings')
  @UseInterceptors(TrimUserResponseInterceptor)
  async updateMembershipSettings(
    @Body() dto: UpdateMembershipSettings,
    @Req() req: Request,
  ) {
    const payload: TokenPayload = req['user'];
    if (payload.role === 'FREE_USER') {
      throw new HttpException(
        '你需要成為會成才能開啟付費功能',
        HttpStatus.UNAUTHORIZED,
      );
    }
    return await this.userService.updateMembershipSettings({
      id: payload.userId,
      dto,
    });
  }

  @Post('refresh-accessToken')
  async refreshAccessToken(@Body() dto: RefreshAccessToken) {
    const { refreshToken } = dto;
    console.log('refreshToken:', refreshToken);
    try {
      const payload = await this.jwtService.verifyAsync(refreshToken);
      console.log('payload from refresh token:', payload);

      const { exp, iat, ...cleanPayload } = payload;
      console.log('ACCESS_TOKEN_VALID_TIME:', ACCESS_TOKEN_VALID_TIME);
      const accessToken = await this.jwtService.signAsync(cleanPayload, {
        expiresIn: ACCESS_TOKEN_VALID_TIME,
      });
      console.log('new access token:', accessToken);
      const accessTokenPayload = this.jwtService.verify(accessToken);
      console.log('payload from access token:', accessTokenPayload);

      return { accessToken };
    } catch (e) {
      if (e instanceof TokenExpiredError) {
        throw new HttpException(
          {
            statusCode: HttpStatus.UNAUTHORIZED,
            message: 'The refresh token has expired',
            error: 'Unauthorized',
          },
          HttpStatus.UNAUTHORIZED,
        );
      } else {
        throw new HttpException(
          {
            statusCode: HttpStatus.BAD_REQUEST,
            message: 'Could not verify refresh token',
            error: 'Bad Request',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
    }
  }

  private async generateTokensAndUpdateRefresh(user: {
    id?: string;
    authId: string;
    chosenTitle?: string;
    email?: string;
    role?: Role;
    avatarUrl?: string;
    displayName?: string;
    onboardingNeeded?: boolean;
    gameMode?: boolean;
    canSendNotification?: boolean;
  }) {
    console.log('user.id:', user.id);
    console.log('authId:', user.authId);
    const payload: TokenPayload = {
      userId: user.id || '',
      authId: user.authId || '',
      email: user.email || '',
      role: user.role,
      avatatrUrl: user.avatarUrl || '',
      displayName: user.displayName || '',
      chosenTitle: user.chosenTitle || '',
      onboardingNeeded: user.onboardingNeeded || true,
      gameMode: user.gameMode || true,
      canSendNotification: user.canSendNotification || false,
    };
    console.log('REFRESH_TOKEN_VALID_TIME:', REFRESH_TOKEN_VALID_TIME);
    console.log('ACCESS_TOKEN_VALID_TIME:', ACCESS_TOKEN_VALID_TIME);
    const accessToken = await this.jwtService.signAsync(payload, {
      expiresIn: ACCESS_TOKEN_VALID_TIME,
    });

    const refreshToken = await this.jwtService.signAsync(payload, {
      expiresIn: REFRESH_TOKEN_VALID_TIME,
    });
    console.log('new refresh token:', refreshToken);

    if (!user.id) {
      throw new HttpException(
        'User ID is missing when generating tokens',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    const updatedUser = await this.userService.updateRefreshToken({
      userId: user.id,
      authId: user.authId,
      refreshToken,
    });
    console.log('updatedUser:', updatedUser);

    return {
      accessToken,
      refreshToken,
      updatedUser,
    };
  }

  @UseGuards(AuthGuard)
  @Post('start-app-session')
  @UseInterceptors(TrimUserResponseInterceptor)
  async postStartAppSession(@Req() req: Request) {
    const payload: TokenPayload = req['user'];
    const userId = payload.userId;

    const result = await this.userService.postStartAppSession({ userId });

    const unlockedTitles: UnlockedTitle[] = [];

    // Check if it is between 1am and 5am
    if (
      result?.startTime &&
      timeUtil.isBetweenTaipei1And5AM(result.startTime)
    ) {
      const nightLoginTitle = await this.gameService.updateTitleProgress({
        userId,
        type: 'NIGHT_LOGIN_TOTAL',
      });
      if (nightLoginTitle) unlockedTitles.push(nightLoginTitle);
    }

    // Check if last session was 3 days ago
    const lastSession = await this.userService.getLastAppSession(userId);
    if (lastSession?.startTime) {
      const now = timeUtil.getUnixTimestamp();
      const gap = now - lastSession.startTime;
      const THREE_DAYS = 3 * 86400;

      if (gap >= THREE_DAYS) {
        const reappearanceTitle = await this.gameService.updateTitleProgress({
          userId,
          type: 'REAPPEARANCE',
        });
        if (reappearanceTitle) unlockedTitles.push(reappearanceTitle);
      }
    }

    return {
      ...result,
      unlockedTitles,
    };
  }

  @UseGuards(AuthGuard)
  @Patch('end-app-session')
  @UseInterceptors(TrimUserResponseInterceptor)
  async updateEndAppSession(@Req() req: Request) {
    const payload: TokenPayload = req['user'];
    const result = await this.userService.updateEndAppSession({
      userId: payload.userId,
    });

    if (result?.endTime && result?.endTime - result?.startTime <= 5) {
      const unlockedTitle = await this.gameService.updateTitleProgress({
        userId: payload.userId,
        type: 'QUICK_EXIT',
      });
      return {
        ...result,
        unlockedTitles: unlockedTitle ? [unlockedTitle] : [],
      };
    }
    return result;
  }
}
