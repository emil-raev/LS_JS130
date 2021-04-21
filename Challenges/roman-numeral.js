const DECIMAL_ROMAN_MAP = [[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
[100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'],
[9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];

class RomanNumeral {
  constructor(number) {
    this.number = number;
  }

  toRoman() {
    let number = this.number;
    let romanNum = '';
    for (let [decimal, roman] of DECIMAL_ROMAN_MAP) {
      while (number >= decimal) {
        romanNum += roman;
        number -= decimal;
      }
    }
    return romanNum;
  }
}

module.exports = RomanNumeral;