import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { TokenPayload } from 'src/app.dto';
import { AuthGuard } from 'src/common/auth.guard';
import { NewsService } from './news.service';
import {
  TrimGetClustersResponseInterceptor,
  TrimGetNewsResponseInterceptor,
} from 'src/common/trim-response-interceptors';
import {
  DislikeArticleDto,
  FollowJournalistDto,
  GetAuthorInfoDto,
  GetTagBasedArticlesForAuthorDto,
  GetTagBasedArticlesForMediaDto,
  LikeArticleDto,
  PostAddUserReadSpecificNewsArticleDto,
  PostCrossAnalysisRequestDto,
  SearchDto,
  UnlockClusterDto,
  VoteNewsDto,
} from './news.dto';
import { HttpService } from '@nestjs/axios';
import { SQSClient, SendMessageCommand } from '@aws-sdk/client-sqs';
import { NotificationService } from 'src/notification/notification.service';
import { GameService } from 'src/game/game.service';
import { UserService } from 'src/user/user.service';

const CROSS_ANALYSIS_SQS_URL = process.env.CROSS_ANALYSIS_SQS_URL;

@Controller('news')
export class NewsController {
  constructor(
    private readonly newsService: NewsService,
    private readonly gameService: GameService,
    private readonly userService: UserService,
    private readonly notificationService: NotificationService,
  ) {}

  @UseGuards(AuthGuard)
  @Get('get-clusters/latest-news')
  // @UseInterceptors(TrimGetClustersResponseInterceptor)
  async getLatestClusters(
    @Query('offset') offset: number = 0,
    @Req() req: Request,
  ) {
    const payload: TokenPayload = req['user'];

    return await this.newsService.getLatestClusters({
      userId: payload.userId,
      offset: Number(offset),
    });
  }

  @UseGuards(AuthGuard)
  @Get('get-clusters/personalised-news')
  // @UseInterceptors(TrimGetClustersResponseInterceptor)
  async getPersonalisedClusters(
    @Query('offset') offset: number = 0,
    @Req() req: Request,
  ) {
    const payload: TokenPayload = req['user'];

    return await this.newsService.getPersonalisedClusters({
      userId: payload.userId,
      offset: Number(offset),
    });
  }

  @UseGuards(AuthGuard)
  @Get('get-clusters/popular-news')
  // @UseInterceptors(TrimGetClustersResponseInterceptor)
  async getPopularClusters(
    @Query('offset') offset: number = 0,
    @Req() req: Request,
  ) {
    const payload: TokenPayload = req['user'];

    return await this.newsService.getPopularClusters({
      userId: payload.userId,
      offset: Number(offset),
    });
  }

  @UseGuards(AuthGuard)
  @Get('get-clusters/blindspot-news')
  // @UseInterceptors(TrimGetClustersResponseInterceptor)
  async getBlindspots(
    @Query('offset') offset: number = 0,
    @Req() req: Request,
  ) {
    const payload: TokenPayload = req['user'];

    return await this.newsService.getBlindspots({
      userId: payload.userId,
      offset: Number(offset),
    });
  }

  @UseGuards(AuthGuard)
  @Get('get-misread-news')
  async getMisreadNews(
    @Query('offset') offset: number = 0,
    @Req() req: Request,
  ) {
    const payload: TokenPayload = req['user'];

    return await this.newsService.getMisreadNews({
      userId: payload.userId,
      offset: Number(offset),
    });
  }

  @UseGuards(AuthGuard)
  @Get('get-news/:clusterId')
  @UseInterceptors(TrimGetNewsResponseInterceptor)
  async getNews(@Param('clusterId') clusterId: string, @Req() req: Request) {
    const payload: TokenPayload = req['user'];

    const result = await this.newsService.getNews({
      userId: payload.userId,
      clusterId: clusterId,
    });
    return result;
  }

  @UseGuards(AuthGuard)
  @Post('vote-cluster')
  @UseInterceptors(TrimGetNewsResponseInterceptor)
  async voteNews(@Req() req: Request, @Body() dto: VoteNewsDto) {
    const payload: TokenPayload = req['user'];

    const result = await this.newsService.voteNews({
      userId: payload.userId,
      clusterId: dto.clusterId,
      vote: dto.vote,
    });
    console.log('result:', result);

    if (result) {
      await this.gameService.updateDailyMissionProgress({
        userId: payload.userId,
        missionTitle: '🗳️ 投票',
      });
      const unlockedAchievement =
        await this.gameService.updateAchievementProgress({
          userId: payload.userId,
          achievementId: 4,
        });
      const unlockedTitle = await this.gameService.updateTitleProgress({
        userId: payload.userId,
        type: 'NEWS_VOTE_TOTAL',
      });
      return {
        unlockedAchievements: unlockedAchievement ? [unlockedAchievement] : [],
        correct: result,
        unlockedTitles: unlockedTitle ? [unlockedTitle] : [],
      };
    }

    return { achievementUnlocked: false, correct: result };
  }

  @UseGuards(AuthGuard)
  @Get('get-author-info/:authorId')
  @UseInterceptors(TrimGetNewsResponseInterceptor)
  async getAuthorInfo(
    @Req() req: Request,
    @Param('authorId') authorId: string,
  ) {
    const payload: TokenPayload = req['user'];

    return await this.newsService.getAuthorInfo({
      authorId,
      userId: payload.userId,
    });
  }

  @UseGuards(AuthGuard)
  @Get('get-media-info/:mediaId')
  @UseInterceptors(TrimGetNewsResponseInterceptor)
  async getMediaInfo(@Req() req: Request, @Param('mediaId') mediaId: string) {
    const payload: TokenPayload = req['user'];

    return await this.newsService.getMediaInfo({
      mediaId,
      userId: payload.userId,
    });
  }

  @UseGuards(AuthGuard)
  @Post('search')
  @UseInterceptors(TrimGetNewsResponseInterceptor)
  async search(@Req() req: Request, @Body() dto: SearchDto) {
    const payload: TokenPayload = req['user'];

    const result = await this.newsService.search({
      input: dto.input,
      userId: payload.userId,
    });

    if (result) {
      const unlockedTitle = await this.gameService.updateTitleProgress({
        userId: payload.userId,
        type: 'SEARCH_TOTAL',
      });

      return {
        ...result,
        unlockedTitles: unlockedTitle ? [unlockedTitle] : [],
      };
    }

    return result;
  }

  @UseGuards(AuthGuard)
  @Post('/cross-analyse')
  async crossAnalyse(
    @Req() req: Request,
    @Body() dto: PostCrossAnalysisRequestDto,
  ) {
    const payload: TokenPayload = req['user'];
    const userId = payload.userId;
    // check if the user has enough brains
    const result = await this.userService.getNumOfBrains({
      userId: userId,
    });
    console.log('result:', result);
    const num_of_brains = result?.num_of_brains;
    console.log('num_of_brains:', num_of_brains);
    if (num_of_brains == undefined) {
      throw new HttpException(
        'num_of_brains is undefined',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    if (num_of_brains < 4) {
      throw new HttpException('你沒有足夠的腦袋', HttpStatus.UNAUTHORIZED);
    }

    // Avoid duplicate processing
    const { alreadyAnalysed, crossAnalysis } =
      await this.newsService.checkIfCrossAnalysisAlreadyHasBeenDone({
        userId: userId,
        dto: dto,
      });
    console.log('alreadyAnalysed:', alreadyAnalysed);
    if (alreadyAnalysed) {
      console.log('alreadyAnalysed!');
      // insert request
      await this.newsService.insertCrossAnalysisRequest({
        articleIds: dto.ids,
        userId: userId,
        content: crossAnalysis?.analysisResult ?? '',
        publicUrl: crossAnalysis?.cross_analysis_url ?? '',
      });
      // deduct tokens
      await this.userService.deductNumOfBrains({ userId: userId });

      console.log('crossAnalysis:', crossAnalysis);
      await this.notificationService.sendAndStoreNotification({
        crossAnalysisId: crossAnalysis?.id ?? undefined,
        recipientId: userId,
        type: 'CROSS_ARTICLES_ANALYSIS',
        title: '跨文章分析已完成',
        content: `關於「${crossAnalysis?.cluster_name}」的跨文章分析已完成，可以點擊閱讀或到跨文章分析區域查看。`,
      });
      await this.gameService.updateOneOffMissionProgress({
        userId: userId,
        missionTitle: '📊 使用跨文章分析功能',
      });
      const unlockedAchievement =
        await this.gameService.updateAchievementProgress({
          userId: userId,
          achievementId: 7,
        });
      const unlockedTitle = await this.gameService.updateTitleProgress({
        userId: payload.userId,
        type: 'AI_ANALYSIS_TOTAL',
      });
      return {
        unlockedAchievements: unlockedAchievement ? [unlockedAchievement] : [],
        unlockedTitles: unlockedTitle ? [unlockedTitle] : [],
      };
    }
    // deduct brains
    await this.userService.deductNumOfBrains({ userId: userId });

    const sqs = new SQSClient({ region: 'ap-northeast-1' }); // or use process.env.AWS_REGION

    if (!CROSS_ANALYSIS_SQS_URL) {
      throw new HttpException(
        'CROSS_ANALYSIS_SQS_URL is undefined',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    const messageBody = JSON.stringify({
      userId: payload.userId,
      articleIds: dto.ids,
    });

    // Make sure to check if the user has enough tokens before updating their progress!!!
    const unlockedAchievement =
      await this.gameService.updateAchievementProgress({
        userId: userId,
        achievementId: 7,
      });
    const unlockedTitle = await this.gameService.updateTitleProgress({
      userId: payload.userId,
      type: 'AI_ANALYSIS_TOTAL',
    });

    await sqs.send(
      new SendMessageCommand({
        QueueUrl: CROSS_ANALYSIS_SQS_URL,
        MessageBody: messageBody,
      }),
    );

    return {
      unlockedAchievements: unlockedAchievement ? [unlockedAchievement] : [],
      unlockedTitles: unlockedTitle ? [unlockedTitle] : [],
    };
  }

  @UseGuards(AuthGuard)
  @Get('/get-single-cross-analysis-report')
  async getSingleCrossAnalysisReport(
    @Req() req: Request,
    @Query('id') id: string,
  ) {
    const payload: TokenPayload = req['user'];
    return await this.newsService.getSingleCrossAnalysisReport({
      crossAnalaysisId: id,
    });
  }

  @UseGuards(AuthGuard)
  @Get('/get-cross-analysis-reports')
  async getCrossAnalysisReports(
    @Req() req: Request,
    @Query('offset') offset: number = 0,
  ) {
    const payload: TokenPayload = req['user'];
    const result = await this.newsService.getCrossAnalysisReports({
      userId: payload.userId,
      offset: Number(offset),
    });

    return result;
  }

  @UseGuards(AuthGuard)
  @Post('like')
  async like(@Req() req: Request, @Body() dto: LikeArticleDto) {
    const payload: TokenPayload = req['user'];
    console.log('dto:', dto);
    const result = await this.newsService.like({
      userId: payload.userId,
      dto: dto,
    });
    if (result.reaction === 'LIKE') {
      await this.gameService.updateDailyMissionProgress({
        userId: payload.userId,
        missionTitle: '👍🏻 讚好新聞',
      });
      const unlockedTitle = await this.gameService.updateTitleProgress({
        userId: payload.userId,
        type: 'NEWS_LIKE_TOTAL',
      });

      return {
        ...result,
        unlockedTitles: unlockedTitle ? [unlockedTitle] : [],
      };
    }

    return result;
  }

  @UseGuards(AuthGuard)
  @Post('dislike')
  async dislike(@Req() req: Request, @Body() dto: DislikeArticleDto) {
    const payload: TokenPayload = req['user'];
    console.log('dto:', dto);
    const result = await this.newsService.dislike({
      userId: payload.userId,
      dto: dto,
    });
    if (result.reaction === 'DISLIKE') {
      await this.gameService.updateDailyMissionProgress({
        userId: payload.userId,
        missionTitle: '👎🏻 踢新聞',
      });
      const unlockedTitle = await this.gameService.updateTitleProgress({
        userId: payload.userId,
        type: 'NEWS_DISLIKE_TOTAL',
      });

      return {
        ...result,
        unlockedTitles: unlockedTitle ? [unlockedTitle] : [],
      };
    }
    return result;
  }

  @UseGuards(AuthGuard)
  @Post('/unlock-cluster')
  async unlockCluster(@Req() req: Request, @Body() dto: UnlockClusterDto) {
    const payload: TokenPayload = req['user'];
    return await this.newsService.unlockCluster({
      userId: payload.userId,
      clusterId: dto.clusterId,
      newsId: dto.newsId,
    });
  }

  @UseGuards(AuthGuard)
  @Post('/follow-journalist')
  async toggleFollowJournalist(
    @Req() req: Request,
    @Body() dto: FollowJournalistDto,
  ) {
    const payload: TokenPayload = req['user'];
    const followStatus = await this.newsService.toggleFollowJournalist({
      userId: payload.userId,
      authorId: dto.authorId,
    });

    if (followStatus.followed === true) {
      await this.gameService.updateOneOffMissionProgress({
        userId: payload.userId,
        missionTitle: '🧍‍♂️ 跟蹤記者',
      });

      const unlockedTitle = await this.gameService.updateTitleProgress({
        userId: payload.userId,
        type: 'JOURNALIST_FOLLOW_TOTAL',
      });
      return {
        ...followStatus,
        unlockedTitles: unlockedTitle ? [unlockedTitle] : [],
      };
    }

    return followStatus;
  }

  @UseGuards(AuthGuard)
  @Post('/get-tag-based-articles-for-media')
  async getAllArticlesForOneNewsOutletWithOneParticularTagForMedia(
    @Req() req: Request,
    @Body() dto: GetTagBasedArticlesForMediaDto,
  ) {
    const payload: TokenPayload = req['user'];
    console.log('dto.offset:', dto.offset);
    return await this.newsService.getAllArticlesForOneNewsOutletWithOneParticularTagForMedia(
      {
        userId: payload.userId,
        mediaId: dto.mediaId,
        tag: dto.tag,
        tagType: dto.tagType,
        offset: dto.offset,
      },
    );
  }

  @UseGuards(AuthGuard)
  @Post('/get-tag-based-articles-for-author')
  async getAllArticlesForOneNewsOutletWithOneParticularTagForAuthor(
    @Req() req: Request,
    @Body() dto: GetTagBasedArticlesForAuthorDto,
  ) {
    const payload: TokenPayload = req['user'];
    return await this.newsService.getAllArticlesForOneNewsOutletWithOneParticularTagForAuthor(
      {
        userId: payload.userId,
        authorId: dto.authorId,
        tag: dto.tag,
        tagType: dto.tagType,
        offset: dto.offset,
      },
    );
  }

  @UseGuards(AuthGuard)
  @Post('/abandon-draft')
  async updateAbandonDraft(@Req() req: Request) {
    const payload: TokenPayload = req['user'];
    return await this.gameService.updateAbandonDraft({
      userId: payload.userId,
    });
  }

  @UseGuards(AuthGuard)
  @Post('/add-user-read-specific-news-article')
  async addUserReadSpecificNewsArticle(
    @Req() req: Request,
    @Body() dto: PostAddUserReadSpecificNewsArticleDto,
  ) {
    const payload: TokenPayload = req['user'];
    return await this.newsService.addUserReadSpecificNewsArticle({
      userId: payload.userId,
      newsId: dto.newsId,
    });
  }
}
