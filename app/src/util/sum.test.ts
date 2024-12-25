import { sum } from './sum';

describe('sum', () => {
  it('should return the input if it is a number', () => {
    expect(sum(5, 10)).toBe(15);
    expect(sum(-5, -10)).toBe(-15);
    expect(sum(-5, 10)).toBe(5);
    expect(sum(5, -10)).toBe(-5);
  });
});