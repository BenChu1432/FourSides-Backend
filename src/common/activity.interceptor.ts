import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { from, Observable, of } from 'rxjs';
import { mapTo, mergeMap, tap } from 'rxjs/operators';
import { ActivityService } from 'src/activity/activity.service';
import { TokenPayload } from 'src/app.dto';
import { GameService } from 'src/game/game.service';
import timeUtil from 'utils/timeUtil';

@Injectable()
export class ActivityInterceptor implements NestInterceptor {
  constructor(
    private readonly activityService: ActivityService,
    private readonly gameService: GameService,
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const user: TokenPayload = req['user'];

    return next.handle().pipe(
      // Use mergeMap to handle the controller's response and perform async operations
      mergeMap((response) => {
        // If user is not present, just return the original response as an observable
        if (!user || !user.userId) return of(response);

        const userId = user.userId;
        const today = timeUtil.getStartOfTodayUnix(); // Get the start of today's timestamp

        // Convert the Promise returned by getLastLoginActivity() into an Observable
        return from(this.activityService.getLastLoginActivity(userId)).pipe(
          // Use another mergeMap to act on the last activity result
          mergeMap((lastActivity) => {
            // Determine whether it's a new login day based on timestamp
            const isNewDay = !lastActivity || lastActivity.createdAt < today;

            // If it's not a new day, no side-effects are needed — return the original response
            if (!isNewDay) return of(response);

            // If it's a new day, perform all required async operations:
            // - Log login activity
            // - Update game missions
            // - Update achievements
            // Use Promise.all to run them in parallel for better performance
            return from(
              Promise.all([
                this.activityService.logActivity(userId, 'LOGIN'),
                this.gameService.updateDailyMissionProgress({
                  userId,
                  missionTitle: '✍🏻 總登入日數',
                }),
                this.gameService.updateDailyLoginStreakProgress({
                  userId,
                  missionTitle: '📅 連續登入日數',
                }),
                this.gameService.updateAchievementProgress({
                  userId: userId,
                  achievementId: 1,
                }),
                this.gameService.updateLoginStreakAchievementProgress({
                  userId: userId,
                  achievementId: 2,
                }),
              ]),
            ).pipe(
              // Once all async operations are complete, return the original response
              mapTo(response),
            );
          }),
        );
      }),
    );
  }
}
