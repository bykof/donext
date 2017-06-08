const EVERY = '*';
const STANDARD_FROM = 0;
const DAY_OF_MONTH_FROM = 1;
const SECOND_TO = 59;
const MINUTE_TO = 59;
const HOUR_TO = 23;
const DAY_OF_MONTH_TO = 31;
const MONTH_TO = 12;
const DAY_OF_WEEK_TO = 6;

export default class CronValidation {
  
  static isNumeric(n) {
    return !isNaN(parseInt(n)) && isFinite(n);
  }
  
  static validateWithRange(value, from, to) {
    return (CronValidation.isNumeric(value) && (parseInt(value) >= from && parseInt(value) <= to) || value === EVERY);
  }
  
  static validateSecond(value) {
    return CronValidation.validateWithRange(value, STANDARD_FROM, SECOND_TO);
  }
  
  static validateMinute(value) {
    return CronValidation.validateWithRange(value, STANDARD_FROM, MINUTE_TO);
  }
  
  static validateHour(value) {
    return CronValidation.validateWithRange(value, STANDARD_FROM, HOUR_TO);
  }
  
  static validateDayOfMonth(value) {
    return CronValidation.validateWithRange(value, DAY_OF_MONTH_FROM, DAY_OF_MONTH_TO);
  }
  
  static validateMonth(value) {
    return CronValidation.validateWithRange(value, STANDARD_FROM, MONTH_TO);
  }
  
  static validateDayOfWeek(value) {
    return CronValidation.validateWithRange(value, STANDARD_FROM, DAY_OF_WEEK_TO);
  }
}