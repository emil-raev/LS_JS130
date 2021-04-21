
class Series {
  constructor(digitsString) {
    this.digitsString = digitsString;
  }

  slices(sliceSize) {
    this.validateSeries(sliceSize);

    let digitsArr = this.digitsString.split('').map(Number);

    let seriesList = [];
    for (let idx = 0; idx <= digitsArr.length - sliceSize; idx++) {
      seriesList.push(digitsArr.slice(idx, idx + sliceSize));
    }
    return seriesList;
  }

  validateSeries(sliceSize) {
    if (sliceSize > this.digitsString.length) throw new Error();
  }
}

module.exports = Series;