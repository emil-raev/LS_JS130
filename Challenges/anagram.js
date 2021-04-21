
class Anagram {
  constructor(word) {
    this.word = word;
  }

  static sortWord(word) {
    return word.toLowerCase().split('').sort().join('');
  }

  match(possibleAnagrams) {
    return possibleAnagrams.filter(this.isAnagram.bind(this));
  }

  isAnagram(possibleAnagram) {
    return this.word.toLowerCase() !== possibleAnagram.toLowerCase() &&
      Anagram.sortWord(this.word) === Anagram.sortWord(possibleAnagram);
  }
}

module.exports = Anagram;