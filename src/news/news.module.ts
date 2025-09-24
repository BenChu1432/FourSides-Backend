import { Module } from '@nestjs/common';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import { KyselyService } from 'src/kysely/kysely.service';
import { JwtModule } from '@nestjs/jwt';
import { ForumService } from 'src/forum/forum.service';
import { NotificationService } from 'src/notification/notification.service';
import { HttpModule } from '@nestjs/axios';
import { GameService } from 'src/game/game.service';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '1h' },
    }),
    HttpModule,
    // other modules
  ],
  controllers: [NewsController],
  providers: [
    UserService,
    NewsService,
    KyselyService,
    ForumService,
    NotificationService,
    GameService,
  ],
})
export class NewsModule {}
