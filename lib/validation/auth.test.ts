import { describe, it, expect } from 'vitest';
import { signUpSchema } from './auth';

describe('signUpSchema', () => {
    // 1. Normalization & Success
    it('normalizes the email by trimming spaces and converting to lowercase', () => {
        const result = signUpSchema.safeParse({
            email: '  Homam@Example.COM  ',
            displayName: 'Homam',
            password: 'myPassword123'
        });

        expect(result.success).toBe(true);
        if (result.success) {
            expect(result.data.email).toBe('homam@example.com');
        }
    });

    // 2. Display Name Boundaries
    it('rejects display name of 1 character', () => {
        const result = signUpSchema.safeParse({ email: 'test@test.com', displayName: 'a', password: 'password123' });
        expect(result.success).toBe(false);
    });

    it('accepts display name of 2 characters', () => {
        const result = signUpSchema.safeParse({ email: 'test@test.com', displayName: 'aa', password: 'password123' });
        expect(result.success).toBe(true);
    });

    it('accepts display name of 50 characters', () => {
        const result = signUpSchema.safeParse({ email: 'test@test.com', displayName: 'a'.repeat(50), password: 'password123' });
        expect(result.success).toBe(true);
    });

    it('rejects display name of 51 characters', () => {
        const result = signUpSchema.safeParse({ email: 'test@test.com', displayName: 'a'.repeat(51), password: 'password123' });
        expect(result.success).toBe(false);
    });

    // 3. Password Boundaries
    it('rejects password of 7 characters', () => {
        const result = signUpSchema.safeParse({ email: 'test@test.com', displayName: 'name', password: 'a'.repeat(7) });
        expect(result.success).toBe(false);
    });

    it('accepts password of 8 characters', () => {
        const result = signUpSchema.safeParse({ email: 'test@test.com', displayName: 'name', password: 'a'.repeat(8) });
        expect(result.success).toBe(true);
    });

    it('accepts password of 72 characters', () => {
        const result = signUpSchema.safeParse({ email: 'test@test.com', displayName: 'name', password: 'a'.repeat(72) });
        expect(result.success).toBe(true);
    });

    it('rejects password of 73 characters', () => {
        const result = signUpSchema.safeParse({ email: 'test@test.com', displayName: 'name', password: 'a'.repeat(73) });
        expect(result.success).toBe(false);
    });

    // 4. Format Rejections
    it('rejects invalid email formats', () => {
        const result = signUpSchema.safeParse({ email: 'invalid-email', displayName: 'name', password: 'password123' });
        expect(result.success).toBe(false);
    });

    it('rejects passwords with non-ASCII characters like emojis', () => {
        const result = signUpSchema.safeParse({ email: 'test@test.com', displayName: 'name', password: 'password🚀' });
        expect(result.success).toBe(false);
    });

    // 5. The Edge Cases
    it('fails a display name of 3 spaces because trim reduces it to length 0', () => {
        const result = signUpSchema.safeParse({ email: 'test@test.com', displayName: '   ', password: 'password123' });
        expect(result.success).toBe(false);
    });

    
    it('rejects a password of 8 spaces', () => {
    const result = signUpSchema.safeParse({ email: 'test@test.com', displayName: 'name', password: '        ' });
    expect(result.success).toBe(false); // Changed from true to false


  });
    it('rejects an email over 254 characters', () => {
    // 246 'a's + '@test.com' (9 chars) = 255 characters
    const longEmail = 'a'.repeat(246) + '@test.com';
    const result = signUpSchema.safeParse({ email: longEmail, displayName: 'name', password: 'password123' });
    expect(result.success).toBe(false);
  });

  it('preserves intentional spaces in passwords without trimming them', () => {
    const passwordWithSpaces = '  abc12345  ';
    const result = signUpSchema.safeParse({ email: 'test@test.com', displayName: 'name', password: passwordWithSpaces });
    
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.password).toBe(passwordWithSpaces);
    }

  });

});