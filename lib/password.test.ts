import { it, expect } from 'vitest';
import { hashPassword, verifyPassword } from './password';

it('does not save the password as a plain text in the storage', async () => {
  const plain = 'mySuperSecretPassword123';
  const hash = await hashPassword(plain);
  
  expect(hash).not.toBe(plain);
  expect(hash.length).toBeGreaterThan(50); // Bcrypt hashes are roughly 60 chars
});

it('users with the same password dont end up with the same hash', async () => {
  const plain = 'commonPassword!';
  const hash1 = await hashPassword(plain);
  const hash2 = await hashPassword(plain);
  
  expect(hash1).not.toBe(hash2);
});

it('rejects wrong passwords', async () => {
  const plain = 'correctPassword';
  const wrongPlain = 'incorrectPassword';
  
  const hash = await hashPassword(plain);
  const isMatch = await verifyPassword(wrongPlain, hash);
  
  expect(isMatch).toBe(false);
});

it('accepts correct passwords', async () => {
  const plain = 'mySuperSecretPassword123';
  const hash = await hashPassword(plain);
  const isMatch = await verifyPassword(plain, hash);
  
  expect(isMatch).toBe(true);
});