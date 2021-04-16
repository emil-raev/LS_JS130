class Account {
  #userEmail;
  #userPassword;
  #userFirstName;
  #userLastName;

  #isValidPassword(testPassword) {
    return this.#userPassword === testPassword;
  }

  static #getRandomLetterNumber() {
    let randomIndex = Math.floor(Math.random() * 62);
    return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRTSUVWXYZ1234567890'[randomIndex];
  }

  static #anonymize() {
    return Array.from(Array(16), _ => Account.#getRandomLetterNumber()).join('');
  }

  displayName = Account.#anonymize();

  constructor(email, password, firstName, lastName) {
    this.#userEmail = email;
    this.#userPassword = password;
    this.#userFirstName = firstName;
    this.#userLastName = lastName;
  }

  reanonymize(password) {
    if (this.#isValidPassword(password)) {
      this.displayName = Account.#anonymize();
      return true;
    } else {
      return 'Invalid Password';
    }
  }

  resetPassword(currentPassword, newPassword) {
    if (this.#isValidPassword(currentPassword)) {
      this.#userPassword = newPassword;
      return true;
    } else {
      return 'Invalid Password';
    }
  }

  firstName(password) {
    if (this.#isValidPassword(password)) {
      return this.#userFirstName;
    } else {
      return 'Invalid Password';
    }
  }

  lastName(password) {
    if (this.#isValidPassword(password)) {
      return this.#userLastName;
    } else {
      return 'Invalid Password';
    }
  }

  email(password) {
    if (this.#isValidPassword(password)) {
      return this.#userEmail;
    } else {
      return 'Invalid Password';
    }
  }
}

let fooBar = new Account('foo@bar.com', '123456', 'foo', 'bar'); //console.log(fooBar);
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'));    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')); // logs true

let displayName = fooBar.displayName;
console.log(fooBar.reanonymize('abc'));             // logs true
console.log(displayName === fooBar.displayName);   // logs false

let bazQux = new Account('baz@qux.com', '123456', 'baz', 'qux');
console.log(fooBar.firstName('abc'));              // logs 'foo'