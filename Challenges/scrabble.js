
class Scrabble {
  constructor(word) {
    this.word = word;
  }

  static SCORING_TABLE = {
    a: 1, b: 3, c: 3, d: 2, e: 1, f: 4, g: 2, h: 4, i: 1,
    j: 8, k: 5, l: 1, m: 3, n: 1, o: 1, p: 3, q: 10,
    r: 1, s: 1, t: 1, u: 1, v: 4, w: 4, x: 8, y: 4, z: 10
  };

  score() {
    if (!this.word || !this.word.trim()) return 0;
    return this.word.toLowerCase().split('')
      .reduce((score, letter) => score + Scrabble.SCORING_TABLE[letter], 0);
  }

  static score(word) {
    return new Scrabble(word).score();
  }
}

module.exports = Scrabble;