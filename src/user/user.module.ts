import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GmailModule } from '../gmail/gmail.module';
import { JwtModule } from '@nestjs/jwt';
import { KyselyModule } from 'src/kysely/kysely.module';
import { GameModule } from 'src/game/game.module';
import { GameService } from 'src/game/game.service';
import { S3Service } from 'src/s3/s3.service';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '1d' },
    }),
    KyselyModule,
    GmailModule,
  ],
  providers: [UserService, GameService, S3Service],
  controllers: [UserController],
})
export class UserModule {}
