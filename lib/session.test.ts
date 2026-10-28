import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getCurrentUser } from './session';
import { prisma } from '@/lib/prisma';
import { hashToken } from './tokens';

// 1. Mock Next.js cookies (which is now asynchronous)
const mockCookieStore = {
  get: vi.fn(),
  set: vi.fn(),
  delete: vi.fn(),
};
vi.mock('next/headers', () => ({
  cookies: vi.fn(() => Promise.resolve(mockCookieStore)),
}));

// 2. Mock the Prisma client
vi.mock('@/lib/prisma', () => ({
  prisma: {
    session: {
      findUnique: vi.fn(),
      deleteMany: vi.fn(),
    },
  },
}));

describe('getCurrentUser', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns null when there is no cookie', async () => {
    mockCookieStore.get.mockReturnValue(undefined);

    const user = await getCurrentUser();
    
    expect(user).toBeNull();
    expect(prisma.session.findUnique).not.toHaveBeenCalled();
  });

  it('returns the user object when the session is valid', async () => {
    const rawToken = 'valid-token-123';
    mockCookieStore.get.mockReturnValue({ value: rawToken });

    const expectedUser = { id: 'user-1', email: 'test@test.com', displayName: 'Test' };
    
    // Simulate Prisma finding a valid, future-dated session
    vi.mocked(prisma.session.findUnique).mockResolvedValue({
      expiresAt: new Date(Date.now() + 10000), // In the future
      user: expectedUser,
    } as any);

    const user = await getCurrentUser();

    expect(user).toEqual(expectedUser);
    
    // Verify it looked up the *hash*, not the raw token
    expect(prisma.session.findUnique).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { tokenHash: hashToken(rawToken) },
      })
    );
  });

  it('returns null and deletes the session when expired', async () => {
    const rawToken = 'expired-token-123';
    mockCookieStore.get.mockReturnValue({ value: rawToken });

    // Simulate Prisma finding a past-dated session
    vi.mocked(prisma.session.findUnique).mockResolvedValue({
      expiresAt: new Date(Date.now() - 10000), // In the past
      user: { id: 'user-1' },
    } as any);

    const user = await getCurrentUser();

    expect(user).toBeNull();
    // Verify it triggered cleanup using the hash
    expect(prisma.session.deleteMany).toHaveBeenCalledWith({
      where: { tokenHash: hashToken(rawToken) }
    });
  });
});
