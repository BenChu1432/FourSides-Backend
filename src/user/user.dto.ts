import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsNotEmpty,
  IsEmpty,
  IsString,
} from 'class-validator';
import { AuthProvider } from './user.enum';
import { Identity, InterestingTopic, PoliticalStance } from './user.enum';
import { InterestingRegionOrCountry } from 'src/kysely/types';
import { IsValidUserName } from './validators/username.validator';

export class RegisterDto {
  @IsOptional()
  name?: string | null;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  password?: string;

  @IsOptional()
  providerId?: string;

  @IsOptional()
  token?: string;

  @IsOptional()
  avatarUrl?: string;
}

export class EmailSignInDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}

// src/user/user.dto.ts

export class EmailVerificationDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  token: string;
}

export class GoogleSignupDto {
  @IsEnum(AuthProvider)
  @IsNotEmpty()
  provider: AuthProvider;

  @IsOptional()
  name: string | null;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  providerId: string; // for Google or Apple

  @IsOptional()
  avatarUrl?: string;
}

export class UpdatePushNotificationTokenDto {
  @IsNotEmpty()
  token: string;
}

export class UpdateUserExtraInfoDto {
  @IsString()
  @IsNotEmpty()
  @IsValidUserName()
  name: string;

  @IsNotEmpty()
  topics: InterestingTopic[];

  @IsNotEmpty()
  regions: InterestingRegionOrCountry[];

  @IsNotEmpty()
  identity: Identity;

  @IsOptional()
  politicalStance: PoliticalStance;
}

export class UpdateGameMode {
  @IsNotEmpty()
  gameMode: boolean;
}

export class UpdateCanSendNotification {
  @IsNotEmpty()
  canSendNotification: boolean;
}

export class RefreshAccessToken {
  @IsNotEmpty()
  refreshToken;
}

export class UpdateMembershipSettings {
  @IsNotEmpty()
  seeReportingMerits;

  @IsNotEmpty()
  seeMisguidingTechniques;

  @IsNotEmpty()
  seeReportingStyle;

  @IsNotEmpty()
  seeReportingIntention;

  @IsNotEmpty()
  removeSensationalHeadlines;

  @IsNotEmpty()
  removeCopyPasteArticles;
}
