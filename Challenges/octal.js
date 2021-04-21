
class Octal {
  constructor(numberString) {
    this.octal = numberString;
  }

  toDecimal() {
    if (this.isInvalid(this.octal)) return 0;

    return this.octal
      .split('').reverse()
      .reduce((acc, nxt, idx) => acc + (nxt * (8 ** idx)), 0);
  }

  isInvalid(numberString) {
    return /[^0-7]/.test(numberString);
  }
}

module.exports = Octal;