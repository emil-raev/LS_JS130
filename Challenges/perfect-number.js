
class PerfectNumber {

  static classify(number) {
    if (number < 1 || !Number.isInteger(number)) throw new Error();

    let aliquotSum = PerfectNumber.getFactorSum(number);

    if (aliquotSum < number) return 'deficient';
    if (aliquotSum === number) return 'perfect';
    return 'abundant';
  }

  static getFactorSum(number) {
    let factorSum = 0;
    for (let factor = 1; factor <= number / 2; factor++) {
      if (!(number % factor)) {
        factorSum += factor;
      }
    }
    return factorSum;
  }
}

module.exports = PerfectNumber;