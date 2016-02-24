jest.dontMock('../src/dueDateHelpers');

describe('DateTime helper', () => {
  it('should return false is datetime is not in working hours', () => {
    const isDateTimeInWorkingHours = require('../src/dueDateHelpers').isDateTimeInWorkingHours;
    const afterWorkingHoursDateTime = new Date(2016, 1, 24, 17, 0);
    const beforeWorkingHoursDateTime = new Date(2016, 1, 24, 8, 59);
    const weekendDateTime = new Date(2016, 1, 27, 12, 0);

    expect(isDateTimeInWorkingHours(afterWorkingHoursDateTime)).toBe(false);
    expect(isDateTimeInWorkingHours(beforeWorkingHoursDateTime)).toBe(false);
    expect(isDateTimeInWorkingHours(weekendDateTime)).toBe(false);
  });

  it('should return true is datetime is in working hours', () => {
    const isDateTimeInWorkingHours = require('../src/dueDateHelpers').isDateTimeInWorkingHours;
    const testDateInWorkingHours1 = new Date(2016, 1, 24, 16, 59);
    const testDateInWorkingHours2 = new Date(2016, 1, 24, 9, 0);

    expect(isDateTimeInWorkingHours(testDateInWorkingHours1)).toBe(true);
    expect(isDateTimeInWorkingHours(testDateInWorkingHours2)).toBe(true);
  });
});
