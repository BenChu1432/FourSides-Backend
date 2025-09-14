import { randomBytes } from 'crypto';

export function generateVerificationToken() {
  return randomBytes(16).toString('hex'); // Generates a 32-character hexadecimal token
}
