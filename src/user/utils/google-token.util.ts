import { OAuth2Client } from 'google-auth-library';
import { ConfigService } from '@nestjs/config';
import { UserService } from '../user.service';
import { HttpException, HttpStatus } from '@nestjs/common';

const client = new OAuth2Client();

const validClientIds = [
  process.env.GOOGLE_WEB_CLIENT_ID,
  process.env.GOOGLE_IOS_CLIENT_ID,
  process.env.GOOGLE_ANDROID_CLIENT_ID,
].filter((id): id is string => typeof id === 'string' && id.length > 0);

export async function verifyGoogleToken(idToken: string) {
  console.log('validClientIds:', validClientIds);
  const ticket = await client.verifyIdToken({
    idToken,
    audience: validClientIds,
  });

  const payload = ticket.getPayload();
  if (!payload) {
    throw new Error('Invalid Google token');
  }

  return {
    email: payload.email,
    providerId: payload.sub, // Google user ID
    email_verified: payload.email_verified,
  };
}
