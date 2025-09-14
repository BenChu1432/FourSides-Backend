import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { JwtModule } from '@nestjs/jwt';
import { KyselyService } from 'src/kysely/kysely.service';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '1h' },
    }),
    // other modules
  ],
  providers: [NotificationService, KyselyService],
  exports: [NotificationService],
  controllers: [NotificationController],
})
export class NotificationModule {}
