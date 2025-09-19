import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';
import { UserModule } from './user/user.module';
import { GameModule } from './game/game.module';
import { ForumModule } from './forum/forum.module';
import { NotificationModule } from './notification/notification.module';
import { AdminModule } from './admin/admin.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GmailModule } from './gmail/gmail.module';
import { PrismaModule } from './prisma/prisma.module';
import { KyselyModule } from './kysely/kysely.module';
import { LoggingModule } from './logging/logging.module';
import { SeederModule } from './seeder/seeder.module';
import { LLMModule } from './llm/llm.module';
import { ActivityModule } from './activity/activity.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ActivityInterceptor } from './common/activity.interceptor';
import { S3Service } from './s3/s3.service';

@Module({
  imports: [
    // ✅ Load environment variables globally
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    KyselyModule,

    // ✅ Your feature modules
    ActivityModule,
    GmailModule,
    UserModule,
    NewsModule,
    GameModule,
    ForumModule,
    NotificationModule,
    AdminModule,
    LoggingModule,
    LLMModule,
    ActivityModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ActivityInterceptor,
    },
    S3Service,
  ],
})
export class AppModule {}
