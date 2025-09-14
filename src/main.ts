import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ResponseWrapperInterceptor } from './common/response-wrapper-interceptors';
import { AllExceptionsFilter } from './common/all-exceptions.filter';

// ✅ Global crash handlers BEFORE Nest starts
process.on('uncaughtException', (err) => {
  console.error('❌ Uncaught Exception:', err);
  process.exit(1); // Allow your process manager to restart the app
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const FRONTEND_URL = process.env.FRONTEND_URL;
  console.log('FRONTEND_URL:', FRONTEND_URL);

  app.enableCors({
    origin: FRONTEND_URL,
    allowedHeaders:
      'Content-Type, Accept, Authorization, authorization, x-auth-provider',
    credentials: true,
  });

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useGlobalInterceptors(new ResponseWrapperInterceptor());
  app.useGlobalFilters(new AllExceptionsFilter());

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
