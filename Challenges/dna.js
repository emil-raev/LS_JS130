
class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(otherStrand) {
    let distance = 0;
    let length = Math.min(this.strand.length, otherStrand.length);
    for (let index = 0; index < length; index++) {
      if (this.strand[index] !== otherStrand[index]) {
        distance++;
      }
    }
    return distance;
  }
}

module.exports = DNA;