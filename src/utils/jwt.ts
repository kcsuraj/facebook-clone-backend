import jwt from 'jsonwebtoken';
import { JWT_SECRET } from './secrets';
import constats from '../config/constants';

const { ACCESS_TOKEN_DURATION } = constats;
/**
 * Generate access token from data
 *
 * @export
 * @param {*} data
 * @returns {string}
 */
export function generateAccessToken(data): string {
  return jwt.sign(data, JWT_SECRET, {
    expiresIn: ACCESS_TOKEN_DURATION
  });
}

/**
 * Verify access token from data
 *
 * @export
 * @param {string} token
 * @returns
 */
export function verifyAccessToken(token: string) {
  return jwt.verify(token, JWT_SECRET);
}
