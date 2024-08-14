import { describe, it, expect } from 'vitest';
import useFormatDate from '../../src/hooks/useFormatDate'; // Adjust the path as necessary

describe('useFormatDate', () => {
  it('should format the date correctly with the correct suffix', () => {
    // Test case 1: Standard date with 'th' suffix
    const date1 = '2023-08-12';
    expect(useFormatDate(date1)).toBe('12th August, 2023');

    // Test case 2: Date ending in 1 with 'st' suffix
    const date2 = '2023-09-01';
    expect(useFormatDate(date2)).toBe('1st September, 2023');

    // Test case 3: Date ending in 2 with 'nd' suffix
    const date3 = '2023-09-02';
    expect(useFormatDate(date3)).toBe('2nd September, 2023');

    // Test case 4: Date ending in 3 with 'rd' suffix
    const date4 = '2023-09-03';
    expect(useFormatDate(date4)).toBe('3rd September, 2023');
  });
});
