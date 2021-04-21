const HOUR_MINUTES = 60;
const DAY_MINUTES = 24 * 60;

class Clock {
  constructor(minutes) {
    this._minutes = (DAY_MINUTES + (minutes % DAY_MINUTES)) % DAY_MINUTES;
  }

  static at(hours, minutes = 0) {
    return new Clock((hours * HOUR_MINUTES) + minutes);
  }

  add(minutes) {
    return new Clock(this._minutes + minutes);
  }

  subtract(minutes) {
    return this.add(-minutes);
  }

  get minutes() {
    return this._minutes % HOUR_MINUTES;
  }

  get hours() {
    return Math.floor(this._minutes / HOUR_MINUTES);
  }

  toString() {
    return [this.hours, this.minutes].map(time => `${time}`.padStart(2, '0')).join(':');
  }

  isEqual(newClock) {
    return this._minutes === newClock._minutes;
  }
}

module.exports = Clock;