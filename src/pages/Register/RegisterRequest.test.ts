import { describe, it, expect } from 'vitest';

describe('1 is not 2', () => {
    it('should throw', () => {
        expect(1).toBe(2);
    });
});