jest.dontMock('../src/dueDateCalculator');
jest.dontMock('../src/nextDateTimeCalculator');
jest.dontMock('../src/dueDateHelpers');

describe('DueDate calculator', () => {
  it('should throw an error if invoked with invalid arguments', () => {
    const calculateDueDate = require('../src/dueDateCalculator').calculateDueDate;
    expect(() => calculateDueDate()).toThrow();
  });

  it('should throw an error if submit date is not reported during working hours', () => {
    const calculateDueDate = require('../src/dueDateCalculator').calculateDueDate;
    const testTurnaroundTime = 1;
    const weekend = new Date(2016, 1, 27, 12, 0);
    const workdayAfterWorkingHours = new Date(2016, 1, 24, 17, 0);
    const workdayBeforeWorkingHours = new Date(2016, 1, 24, 8, 59);
    expect(() => calculateDueDate(weekend, testTurnaroundTime)).toThrow();
    expect(() => calculateDueDate(workdayAfterWorkingHours, testTurnaroundTime)).toThrow();
    expect(() => calculateDueDate(workdayBeforeWorkingHours, testTurnaroundTime)).toThrow();
  });

  it('should return the next hour', () => {
    const calculateDueDate = require('../src/dueDateCalculator').calculateDueDate;
    const testTurnaroundTime = 1;
    const testDate = new Date(2016, 1, 24, 12, 20);
    const result = calculateDueDate(testDate, testTurnaroundTime);

    expect(result.getFullYear()).toBe(2016);
    expect(result.getMonth()).toBe(1);
    expect(result.getDate()).toBe(24);
    expect(result.getHours()).toBe(13);
    expect(result.getMinutes()).toBe(20);
  });

  it('should handle the 16 working hours example', () => {
    const calculateDueDate = require('../src/dueDateCalculator').calculateDueDate;
    const testTurnaroundTime = 16;
    const testDate = new Date(2016, 1, 24, 14, 12);
    const result = calculateDueDate(testDate, testTurnaroundTime);

    expect(result.getFullYear()).toBe(2016);
    expect(result.getMonth()).toBe(1);
    expect(result.getDate()).toBe(26);
    expect(result.getHours()).toBe(14);
    expect(result.getMinutes()).toBe(12);
  });

  it('should handle weekends', () => {
    const calculateDueDate = require('../src/dueDateCalculator').calculateDueDate;
    const twoDaysTurnaroundTime = 8;
    const testFridayDate = new Date(2016, 1, 26, 14, 12);
    const result = calculateDueDate(testFridayDate, twoDaysTurnaroundTime);

    expect(result.getFullYear()).toBe(2016);
    expect(result.getMonth()).toBe(1);
    expect(result.getDate()).toBe(29);
    expect(result.getHours()).toBe(14);
    expect(result.getMinutes()).toBe(12);
  });

  it('should handle multiple weekends', () => {
    const calculateDueDate = require('../src/dueDateCalculator').calculateDueDate;
    const twoDaysTurnaroundTime = 48;
    const testFridayDate = new Date(2016, 1, 26, 14, 12);
    const result = calculateDueDate(testFridayDate, twoDaysTurnaroundTime);

    expect(result.getFullYear()).toBe(2016);
    expect(result.getMonth()).toBe(2);
    expect(result.getDate()).toBe(7);
    expect(result.getHours()).toBe(14);
    expect(result.getMinutes()).toBe(12);
  });
});
