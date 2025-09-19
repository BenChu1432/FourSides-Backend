import { Role } from './kysely/types';

export class TokenPayload {
  userId: string;
  authId: string;
  email: string;
  role?: Role;
  avatatrUrl: string;
  displayName: string;
  chosenTitle: string;
  onboardingNeeded: boolean;
  gameMode: boolean;
  canSendNotification: boolean;
}
