
class Triangle {
  constructor(...sides) {
    this.sides = sides.sort((a, b) => a - b);
    if (this.isInvalid()) throw new Error();
  }

  isInvalid() {
    let [a, b, c] = this.sides;
    return a <= 0 || a + b <= c;
  }

  kind() {
    let [a, b, c] = this.sides;
    if (a === c) return 'equilateral';
    if (a === b || b === c) return 'isosceles';
    return 'scalene';
  }
}

module.exports = Triangle;