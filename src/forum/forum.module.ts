import { Module } from '@nestjs/common';
import { ForumService } from './forum.service';
import { ForumController } from './forum.controller';
import { KyselyService } from 'src/kysely/kysely.service';
import { JwtModule } from '@nestjs/jwt';
import { NotificationService } from 'src/notification/notification.service';
import { GameService } from 'src/game/game.service';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '1h' },
    }),
    // other modules
  ],
  controllers: [ForumController],
  providers: [ForumService, KyselyService, NotificationService, GameService],
})
export class ForumModule {}
