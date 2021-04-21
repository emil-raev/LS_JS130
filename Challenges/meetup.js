const WEEKDAYS = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const ORDINALS = ['first', 'second', 'third', 'fourth', 'fifth'];

class Meetup {
  constructor(year, month) {
    this.year = year;
    this.month = month;
  }

  day(weekday, schedule) {
    let day;
    schedule = schedule.toLowerCase();
    weekday = weekday.toLowerCase();
    let weekdayDates = this.getWeekdayDates(weekday);

    switch (schedule) {
      case 'last':
        day = weekdayDates[weekdayDates.length - 1];
        break;
      case 'teenth':
        day = weekdayDates.find(day => day > 12);
        break;
      default:
        day = weekdayDates[ORDINALS.indexOf(schedule)];
    }
    return day ? new Date(this.year, this.month - 1, day) : null;
  }

  getWeekdayDates(weekday) {
    let weekdayDates = [];
    let lastDay = new Date(this.year, this.month, 0).getDate(); //0 day of next month = last day of month
    for (let day = 1; day <= lastDay; day++) {
      let date = new Date(this.year, this.month - 1, day);
      if (WEEKDAYS[date.getDay()] === weekday) {
        weekdayDates.push(day);
      }
    }
    return weekdayDates;
  }
}

module.exports = Meetup;