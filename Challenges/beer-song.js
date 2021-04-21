/* eslint-disable max-len */

class BeerSong {

  static verse(bottles) {
    return new Verse(bottles).getVerse();
  }

  static verses(startBottles, endBottles) {
    let song = [];
    for (let currentBottles = startBottles; currentBottles >= endBottles; currentBottles--) {
      song.push(BeerSong.verse(currentBottles));
    }
    return song.join('\n');
  }

  static lyrics() {
    return this.verses(99, 0);
  }

}

class Verse {
  constructor(bottles) {
    this.bottles = bottles;
  }

  getVerse() {
    switch (this.bottles) {
      case 0:
        return this.zeroBottleVerse();
      case 1:
        return this.singleBottleVerse();
      case 2:
        return this.twoBottleVerse();
      default:
        return this.defaultVerse();
    }
  }

  defaultVerse() {
    return `${this.bottles} bottles of beer on the wall, ${this.bottles}` +
      ` bottles of beer.\nTake one down and pass it around, ` +
      `${this.bottles - 1} bottles of beer on the wall.\n`;
  }

  twoBottleVerse() {
    return `2 bottles of beer on the wall, 2 bottles of beer.\n` +
      `Take one down and pass it around, 1 bottle of beer ` +
      `on the wall.\n`;
  }

  singleBottleVerse() {
    return `1 bottle of beer on the wall, 1 bottle of beer.\n` +
      `Take it down and pass it around, no more bottles of ` +
      `beer on the wall.\n`;
  }

  zeroBottleVerse() {
    return `No more bottles of beer on the wall, no more bottles ` +
      `of beer.\nGo to the store and buy some more, 99 bottles ` +
      `of beer on the wall.\n`;
  }
}

// class Verse {
//   constructor(bottles) {
//     this.bottles = bottles;
//   }

//   getVerse() {

//     return `${Verse.capFirst(this.bottlesSelect(this.bottles))} of beer on the wall, ${this.bottlesSelect(this.bottles)} of beer.\n` +
//       `${this.action(this.bottles)}, ${this.bottlesSelect(this.bottles - 1)} of beer on the wall.\n`;
//   }

//   action(bottles) {
//     return bottles === 0 ? 'Go to the store and buy some more' : `Take ${bottles === 1 ? 'it' : 'one'} down and pass it around`;
//   }

//   bottlesSelect(bottles) {
//     switch (bottles) {
//       case -1:
//         return `99 bottles`;
//       case 0:
//         return `no more bottles`;
//       case 1:
//         return `1 bottle`;
//       default:
//         return `${bottles} bottles`;
//     }
//   }

//   static capFirst(string) {
//     return string.replace(/./, (char) => char.toUpperCase());
//   }
// }

module.exports = BeerSong;