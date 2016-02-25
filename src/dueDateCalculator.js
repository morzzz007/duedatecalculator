const DueDateHelpers = require('./dueDateHelpers');
const NextDateTimeCalculator = require('./nextDateTimeCalculator');

function calculateDueDate(submitDate, turnaroundTime) {
  var resultDate = new Date(submitDate);

  if (typeof submitDate === 'undefined' || typeof turnaroundTime === 'undefined') {
    throw new Error('Please enter valid parameters!');
  }

  if (DueDateHelpers.isDateTimeInWorkingHours(submitDate) === false) {
    throw new Error('A problem can only be reported during working hours!');
  }

  for (var minutesToAdd = 0; minutesToAdd < turnaroundTime * 60; minutesToAdd++) {
    resultDate = NextDateTimeCalculator.calculateNextDateTime(resultDate);
  }

  return resultDate;
}

module.exports = {
  calculateDueDate,
};
