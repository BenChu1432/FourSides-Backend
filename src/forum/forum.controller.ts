import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ForumService } from './forum.service';
import { AuthGuard } from 'src/common/auth.guard';
import {
  CommentDto,
  DislikeCommentDto,
  LikeCommentDto,
  ReplyDto,
} from './forum.dto';
import { TokenPayload } from 'src/app.dto';
import { GameService } from 'src/game/game.service';

@Controller('forum')
export class ForumController {
  constructor(
    private readonly forumService: ForumService,
    private readonly gameService: GameService,
  ) {}

  @UseGuards(AuthGuard)
  @Post('comment')
  async comment(@Req() req: Request, @Body() dto: CommentDto) {
    const payload: TokenPayload = req['user'];

    const result = await this.forumService.comment({
      userId: payload.userId,
      dto: dto,
    });

    if (!result) {
      throw new HttpException(
        'Comment is undefined',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    await this.gameService.updateDailyMissionProgress({
      userId: payload.userId,
      missionTitle: '💬 留言',
    });
    const achievementUnlocked =
      await this.gameService.updateAchievementProgress({
        userId: payload.userId,
        achievementId: 6,
      });

    return { achievementUnlocked: achievementUnlocked, ...result };
  }

  @UseGuards(AuthGuard)
  @Post('reply')
  async reply(@Req() req: Request, @Body() dto: ReplyDto) {
    const payload: TokenPayload = req['user'];
    console.log('dto:', dto);
    return await this.forumService.reply({
      userId: payload.userId,
      dto: dto,
    });
  }

  @UseGuards(AuthGuard)
  @Post('like')
  async like(@Req() req: Request, @Body() dto: LikeCommentDto) {
    const payload: TokenPayload = req['user'];
    console.log('dto:', dto);
    const result = await this.forumService.like({
      userId: payload.userId,
      dto: dto,
    });

    if (result) {
      await this.gameService.updateDailyMissionProgress({
        userId: payload.userId,
        missionTitle: '❤️ 讚好留言',
      });
    }

    return result;
  }

  @UseGuards(AuthGuard)
  @Post('dislike')
  async dilike(@Req() req: Request, @Body() dto: LikeCommentDto) {
    const payload: TokenPayload = req['user'];
    console.log('dto:', dto);
    return await this.forumService.dislike({
      userId: payload.userId,
      dto: dto,
    });
  }
}
