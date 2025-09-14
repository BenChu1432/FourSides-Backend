// src/llm/llm.module.ts
import { Module } from '@nestjs/common';
import { LLMController } from './llm.controller';
import { LLMService } from './llm.service';
import { JwtModule } from '@nestjs/jwt';
import { KyselyService } from 'src/kysely/kysely.service';
import { NotificationService } from 'src/notification/notification.service';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '1h' },
    }),
    // other modules
  ],
  controllers: [LLMController],
  providers: [LLMService, KyselyService, NotificationService],
})
export class LLMModule {}
