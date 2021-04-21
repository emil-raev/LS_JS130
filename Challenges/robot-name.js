/* eslint-disable max-len */

class Robot {
  static namesDB = new Set();

  constructor() {
    this._name = null;
  }

  name() {
    if (!this._name) {
      this._name = this.getName();
    }
    return this._name;
  }

  reset() {
    let oldName = this.name();
    this._name = null;
    Robot.namesDB.delete(oldName);
  }

  getName() {
    let robotName;
    do {
      robotName = Robot.charGenerator('A', 'Z', 2) + Robot.charGenerator('0', '9', 3);
    } while (Robot.namesDB.has(robotName));

    Robot.namesDB.add(robotName);
    return robotName;
  }

  static charGenerator(from, to, length) {
    let result = '';
    const asciiFrom = from.codePointAt();
    const asciiTo = to.codePointAt();
    while (length--) {
      result += String.fromCodePoint(asciiFrom + Math.floor(Math.random() * (asciiTo - asciiFrom)));
    }
    return result;
  }
}

module.exports = Robot;