
class CustomSet {
  constructor(elements = []) {
    this.set = elements.filter(CustomSet.getUnique);
  }

  static getUnique(elem, idx, array) {
    return idx === array.indexOf(elem);
  }

  isEmpty() {
    return this.set.length === 0;
  }

  add(elem) {
    if (!this.contains(elem)) {
      this.set.push(elem);
    }
    return this;
  }

  contains(elem) {
    return this.set.includes(elem);
  }

  isSubset(other) {
    return this.set.every(elem => other.contains(elem));
  }

  isDisjoint(other) {
    return this.set.every(elem => !other.contains(elem));

  }

  isSame(other) {
    return this.isSubset(other) && other.isSubset(this);
  }

  intersection(other) {
    return new CustomSet(this.set.filter(elem => other.contains(elem)));

  }

  difference(other) {
    return new CustomSet(this.set.filter(elem => !other.contains(elem)));

  }

  union(other) {
    return new CustomSet([...this.set, ...other.set].filter(CustomSet.getUnique));

  }

}

module.exports = CustomSet;