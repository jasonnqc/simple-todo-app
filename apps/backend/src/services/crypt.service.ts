import bycrypt from 'bcrypt';

const SALT_ROUNDS = 12;

export function generateHash(text: string) {
  return bycrypt.hash(text, SALT_ROUNDS);
}

export function compareTextAndHash(text: string, hash: string) {
  return bycrypt.compare(text, hash);
}
