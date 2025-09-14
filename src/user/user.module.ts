import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GmailModule } from '../gmail/gmail.module';
import { JwtModule } from '@nestjs/jwt';
import { KyselyModule } from 'src/kysely/kysely.module';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '1d' },
    }),
    KyselyModule,
    GmailModule,
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
