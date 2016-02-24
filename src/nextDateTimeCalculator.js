const DueDateHelpers = require('./dueDateHelpers');
const MINUTE = 60000;

calculateNextDateTime = currentDateTime => {
  const nextDateTime = new Date(currentDateTime);
  nextDateTime.setTime(nextDateTime.getTime() + MINUTE);

  if (nextDateTime.getHours() === DueDateHelpers.WORKDAY_END_HOUR) {
    nextDateTime.setDate(nextDateTime.getDate() + 1);
    nextDateTime.setHours(DueDateHelpers.WORKDAY_START_HOUR);
    nextDateTime.setMinutes(0);

    if (nextDateTime.getDay() === DueDateHelpers.SATURDAY) {
      nextDateTime.setDate(nextDateTime.getDate() + 2);
    }
  }

  return nextDateTime;
};

module.exports = {
  calculateNextDateTime,
};
