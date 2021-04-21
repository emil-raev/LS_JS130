/* eslint-disable no-mixed-operators */

class Diamond {

  static makeDiamond(midLetter) {
    let result = '';
    let increment = 1;
    let midRow = midLetter.codePointAt() - 64;
    let maxWidth = 2 * midRow - 1;
    for (let row = 1; row > 0; row += increment) {
      let letter = String.fromCodePoint(64 + row);
      let padWidth = midRow - row;
      let regex = new RegExp(`(?<=^.{${padWidth}}).|.(?=.{${padWidth}}$)`, 'g');

      result += ' '.repeat(maxWidth).replace(regex, letter) + '\n';

      if (row === midRow) {
        increment = -1;
      }
    }
    return result;
  }
}
module.exports = Diamond;

// class Diamond {

//   static getLetter(width) {
//     let offset = (width + 1) / 2;
//     return String.fromCodePoint(64 + offset);
//   }

//   static getMaxWidth(midLetter) {
//     return 2 * (midLetter.codePointAt() - 64) - 1;
//   }

//   static makeDiamond(midLetter) {
//     let result = '';
//     let increment = 2;
//     for (let width = 1; width > 0; width += increment) {
//       let padding = ' '.repeat((this.getMaxWidth(midLetter) - width) / 2);

//       result += padding + this.getLetter(width).repeat(width).replace(/(?<=.).(?=.)/g, ' ') + padding + '\n';

//       if (width === this.getMaxWidth(midLetter)) {
//         increment = -2;
//       }
//     }
//     return result;
//   }
// }

// module.exports = Diamond;

// class Diamond {

//   static makeDiamond(midLetter) {
//     let result = '';
//     let increment = 1;
//     let midLetterOffset = midLetter.codePointAt() - 64;
//     for (let idx = 1; idx > 0; idx += increment) {
//       let padding = ' '.repeat(midLetterOffset - idx);
//       result += padding +
//         String.fromCodePoint(64 + idx).repeat(2 * idx - 1).replace(/(?<=.).(?=.)/g, ' ') +
//         padding + '\n';
//       if (idx === midLetterOffset) {
//         increment = -1;
//       }
//     }

//     return result;
//   }
// }

// module.exports = Diamond;