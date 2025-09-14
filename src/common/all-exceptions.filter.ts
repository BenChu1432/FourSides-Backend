import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const isHttpException = exception instanceof HttpException;
    console.log('isHttpException:', isHttpException);
    const status = isHttpException ? 200 : HttpStatus.INTERNAL_SERVER_ERROR;
    console.log('status:', status);

    const errorResponse = isHttpException
      ? exception.getResponse()
      : 'Internal server error';
    console.log('errorResponse:', errorResponse);
    // Normalize message
    const errorMessage =
      typeof errorResponse === 'string'
        ? errorResponse
        : (errorResponse as any).message || 'Internal server error';
    console.log('errorMessage:', errorMessage);
    const timestamp = new Date().toISOString();
    const path = request.url;
    const requestId = uuidv4(); // Optional: can be added to every request via middleware

    // 🔍 Log the error details (can be replaced with a logger like Winston)
    console.error(
      `[${timestamp}] [${requestId}] Error on ${path} - ${errorMessage}`,
    );
    if (!isHttpException) {
      console.error(exception.stack);
    }
    console.log('standardised response');
    // 🚀 Send standardized response
    response.status(status).json({
      success: false,
      errorMessage,
      requestId,
    });
  }
}
