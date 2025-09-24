import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { TokenPayload } from 'src/app.dto';
import { AuthGuard } from 'src/common/auth.guard';
import { GameService } from './game.service';
import { ReapRewardsDto, UploadAnswerDto } from './game.dto';

@UseGuards(AuthGuard)
@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}
  @UseGuards(AuthGuard)
  @Get('/get-missions')
  async getMissions(@Req() req: Request) {
    const payload: TokenPayload = req['user'];
    return await this.gameService.getMissions(payload.userId);
  }

  @UseGuards(AuthGuard)
  @Get('/get-achievements')
  async getAchievements(@Req() req: Request) {
    const payload: TokenPayload = req['user'];
    return await this.gameService.getAchievements(payload.userId);
  }

  @UseGuards(AuthGuard)
  @Get('/get-titles')
  async getTitles(@Req() req: Request) {
    const payload: TokenPayload = req['user'];
    const titles = await this.gameService.getTitles(payload.userId);
    console.log('titles:', titles);
    return titles;
  }

  @UseGuards(AuthGuard)
  @Patch('/update-like-news-mission-progress')
  async updateLikeNewsMissionProgress(@Req() req: Request) {
    const payload: TokenPayload = req['user'];
    const titles = await this.gameService.updateDailyMissionProgress({
      userId: payload.userId,
      missionTitle: '👍🏻 讚好新聞',
    });
    console.log('titles:', titles);
    return titles;
  }

  @UseGuards(AuthGuard)
  @Post('/upload-answer-to-misguiding-techniques-questions')
  async uploadAnswerToMisguidingTechniquesQuestion(
    @Req() req: Request,
    @Body() dto: UploadAnswerDto,
  ) {
    const payload: TokenPayload = req['user'];
    const result = await this.gameService.uploadAnswer({
      userId: payload.userId,
      dto,
    });
    await this.gameService.updateDailyMissionProgress({
      userId: payload.userId,
      missionTitle: '🙌🏻 好壞題',
    });
    console.log('result:', result);
    if (result) {
      const unlockedAchievement =
        await this.gameService.updateAchievementProgress({
          userId: payload.userId,
          achievementId: 5,
        });
      return {
        unlockedAchievements: unlockedAchievement ? [unlockedAchievement] : [],
        correct: result,
      };
    }
    return { correct: result };
  }

  @UseGuards(AuthGuard)
  @Post('/upload-answer-to-true-false-not-given-questions')
  async uploadAnswerToTrueFalseNotGivenQuestion(
    @Req() req: Request,
    @Body() dto: UploadAnswerDto,
  ) {
    const payload: TokenPayload = req['user'];
    const result = await this.gameService.uploadAnswer({
      userId: payload.userId,
      dto,
    });
    await this.gameService.updateDailyMissionProgress({
      userId: payload.userId,
      missionTitle: '⭕ 是非題',
    });
    console.log('result:', result);
    if (result) {
      const unlockedAchievement =
        await this.gameService.updateAchievementProgress({
          userId: payload.userId,
          achievementId: 5,
        });
      return {
        unlockedAchievements: unlockedAchievement ? [unlockedAchievement] : [],
        correct: result,
      };
    }
  }

  @UseGuards(AuthGuard)
  @Post('/update-user-title-click-article-total')
  async updateUserTitleClickArticleTotal(
    @Req() req: Request,
    @Body() dto: UploadAnswerDto,
  ) {
    const payload: TokenPayload = req['user'];

    await this.gameService.updateUserTitleClickArticleTotal({
      userId: payload.userId,
    });
  }

  @UseGuards(AuthGuard)
  @Post('/update-user-clickbait-article-click-total')
  async updateUserClickbaitClickArticleTotal(
    @Req() req: Request,
    @Body() dto: UploadAnswerDto,
  ) {
    const payload: TokenPayload = req['user'];

    await this.gameService.updateUserClickbaitArticleClickProgress({
      userId: payload.userId,
    });
  }

  @UseGuards(AuthGuard)
  @Post('/update-user-share-news-total')
  async updateUserShareNewsTotal(@Req() req: Request) {
    const payload: TokenPayload = req['user'];

    const unlockedTitle = await this.gameService.updateTitleProgress({
      userId: payload.userId,
      type: 'NEWS_SHARE_TOTAL',
    });

    return {
      unlockedTitles: unlockedTitle ? [unlockedTitle] : [],
    };
  }

  @UseGuards(AuthGuard)
  @Post('/reap-rewards')
  async reapRewards(@Req() req: Request, @Body() dto: ReapRewardsDto) {
    const payload: TokenPayload = req['user'];
    const result = await this.gameService.reapRewards({
      userId: payload.userId,
      userMissionId: dto.userMissionId,
    });

    if (result) {
      const unlockedTitle = await this.gameService.updateTitleProgress({
        userId: payload.userId,
        type: 'REWARD_CLAIM_TOTAL',
      });
      return {
        unlockedTitles: unlockedTitle ? [unlockedTitle] : [],
        ...result,
      };
    }
    return result;
  }
}
