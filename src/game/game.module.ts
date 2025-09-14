import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameController } from './game.controller';
import { KyselyModule } from 'src/kysely/kysely.module';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    KyselyModule,
    UserModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [GameService],
  controllers: [GameController],
  exports: [GameService],
})
export class GameModule {}
