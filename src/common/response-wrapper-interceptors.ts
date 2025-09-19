import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { Title } from 'src/kysely/types';

@Injectable()
export class ResponseWrapperInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        const titles: Title[] = data?.unlockedTitles || [];
        const achievements = data?.unlockedAchievements || [];
        const response = {
          success: true,
          result: data,
          achievements,
          titles,
        };
        console.log('response:', response);
        return response;
      }),
    );
  }
}
