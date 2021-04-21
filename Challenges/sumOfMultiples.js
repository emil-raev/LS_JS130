
class SumOfMultiples {
  constructor(...factors) {
    this.factors = factors.length ? factors : [3, 5];
  }

  to(limit) {
    let sum = 0;
    for (let num = 1; num < limit; num++) {
      if (this.factors.some(factor => !(num % factor))) {
        sum += num;
      }
    }
    return sum;
  }

  static to(limit) {
    return new SumOfMultiples().to(limit);
  }
}

module.exports = SumOfMultiples;