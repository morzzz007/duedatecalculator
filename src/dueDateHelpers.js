const SATURDAY = 6;
const SUNDAY = 0;
const WORKDAY_START_HOUR = 9;
const WORKDAY_END_HOUR = 17;

function isDateTimeInWorkingHours(dateTime) {
  const dateTimeHour = dateTime.getHours();
  const dateTimeDay = dateTime.getDay();

  if (dateTimeDay === SATURDAY || dateTimeDay === SUNDAY) return false;
  return dateTimeHour >= WORKDAY_START_HOUR && dateTimeHour < WORKDAY_END_HOUR;
}

module.exports = {
  SATURDAY,
  SUNDAY,
  WORKDAY_START_HOUR,
  WORKDAY_END_HOUR,
  isDateTimeInWorkingHours,
};
