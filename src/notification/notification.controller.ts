import { Controller, Get, Query, Req, UseGuards } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { AuthGuard } from 'src/common/auth.guard';
import { TokenPayload } from 'src/app.dto';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @UseGuards(AuthGuard)
  @Get('get-latest-notifications')
  // @UseInterceptors(TrimGetClustersResponseInterceptor)
  async getPopularClusters(
    @Query('offset') offset: number = 0,
    @Req() req: Request,
  ) {
    const payload: TokenPayload = req['user'];

    return await this.notificationService.getNotifications({
      userId: payload.userId,
      offset: Number(offset),
    });
  }
}
