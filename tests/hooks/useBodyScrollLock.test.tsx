import { renderHook } from '@testing-library/react';
import { useBodyScrollLock } from '../../src/hooks/useBodyScrollLock';
import { afterEach, describe, expect, it } from 'vitest';

describe('useBodyScrollLock', () => {
  afterEach(() => {
    // Reset the body style after each test
    document.body.style.overflow = 'auto';
  });

  it('should lock the body scroll when isLocked is true', () => {
    renderHook(() => useBodyScrollLock(true));
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('should unlock the body scroll when isLocked is false', () => {
    renderHook(() => useBodyScrollLock(false));
    expect(document.body.style.overflow).toBe('auto');
  });
});