import appleSignin from 'apple-signin-auth';
import { UserService } from '../user.service';

export async function verifyAppleToken(idToken: string) {
  const response = await appleSignin.verifyIdToken(idToken, {
    audience: process.env.APPLE_CLIENT_ID,
    ignoreExpiration: false,
  });

  return {
    email: response.email,
    providerId: response.sub, // Apple user ID
  };
}
