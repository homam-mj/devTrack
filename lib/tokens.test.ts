import { describe, it, expect } from 'vitest';
import { generateToken, hashToken } from './tokens';

describe('tokens', () => {
  describe('generateToken', () => {
    it('generates a 64-character hex string (32 bytes)', () => {
      const token = generateToken();
      expect(typeof token).toBe('string');
      expect(token).toHaveLength(64);
      expect(token).toMatch(/^[0-9a-f]{64}$/); // Ensures it's valid hex
    });

    it('generates unique tokens on subsequent calls', () => {
      const token1 = generateToken();
      const token2 = generateToken();
      expect(token1).not.toBe(token2);
    });
  });

  describe('hashToken', () => {
it('produces a deterministic SHA-256 hash for a known input', () => {
      const knownInput = 'test-token';
      const expectedHash = '4c5dc9b7708905f77f5e5d16316b5dfb425e68cb326dcd55a860e90a7707031e';
      
      const hash = hashToken(knownInput);
      expect(hash).toBe(expectedHash);
      expect(hash).toHaveLength(64);
    });

    it('produces different hashes for different inputs', () => {
      const hash1 = hashToken('token-A');
      const hash2 = hashToken('token-B');
      expect(hash1).not.toBe(hash2);
    });
  });
});