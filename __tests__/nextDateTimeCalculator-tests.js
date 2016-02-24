jest.dontMock('../src/nextDateTimeCalculator');

describe('Next DateTime calculator', () => {
  it('should return a date with the next minute', () => {
    const calculateNextDateTime = require('../src/nextDateTimeCalculator').calculateNextDateTime;
    const testDate = new Date(2016, 1, 24, 12, 0);
    const result = calculateNextDateTime(testDate);

    expect(result.getFullYear()).toBe(2016);
    expect(result.getMonth()).toBe(1);
    expect(result.getDate()).toBe(24);
    expect(result.getHours()).toBe(12);
    expect(result.getMinutes()).toBe(1);
  });

  it('should return next day 9AM after 4:59PM', () => {
    const calculateNextDateTime = require('../src/nextDateTimeCalculator').calculateNextDateTime;
    const testDate = new Date(2016, 1, 24, 16, 59);
    const result = calculateNextDateTime(testDate);

    expect(result.getFullYear()).toBe(2016);
    expect(result.getMonth()).toBe(1);
    expect(result.getDate()).toBe(25);
    expect(result.getHours()).toBe(9);
    expect(result.getMinutes()).toBe(0);
  });

  it('should return monday 9AM after friday 4:59PM', () => {
    const calculateNextDateTime = require('../src/nextDateTimeCalculator').calculateNextDateTime;
    const testDate = new Date(2016, 1, 26, 16, 59);
    const result = calculateNextDateTime(testDate);

    expect(result.getFullYear()).toBe(2016);
    expect(result.getMonth()).toBe(1);
    expect(result.getDate()).toBe(29);
    expect(result.getHours()).toBe(9);
    expect(result.getMinutes()).toBe(0);
  });
});
