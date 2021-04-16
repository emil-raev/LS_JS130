// function myBind(fn, context) {
//   return function (...args) {
//     return fn.call(context, ...args);
//   };
// }

// function myBind(fn, context) {
//   return (...args) => fn.call(context, ...args);
// }

// function myBind(fn, context, ...argsBound) {
//   return function (...args) {
//     return fn.call(context, ...argsBound, ...args);
//   };
// }

// function newStack() {
//   let stack = [];
//   return {
//     push(elem) {
//       stack.push(elem);
//     },
//     pop() {
//       return stack.pop();
//     },
//     printStack() {
//       for (const elem of stack) {
//         console.log(elem);
//       }
//     }
//   };
// }

// function delegate(object, method, ...args) {
//   return function () {
//     return object[method](...args);
//   };
// }

class Person {
  constructor(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  communicate() {
    console.log(`Communicating`);
  }

  eat() {
    console.log(`Eating`);
  }

  sleep() {
    console.log(`Sleeping`);
  }
}

class Doctor extends Person {
  constructor(firstName, lastName, age, gender, specialty) {
    super(firstName, lastName, age, gender);
    this.specialization = specialty;
  }

  diagnose() {
    console.log('Diagnosing');
  }
}

class Professor extends Person {
  constructor(firstName, lastName, age, gender, expertise) {
    super(firstName, lastName, age, gender);
    this.subject = expertise;
  }

  teach() {
    console.log("Teaching");
  }
}

function extend(object, mixin) {
  let methodNames = Object.keys(mixin);

  methodNames.forEach((name) => {
    object[name] = function (...args) {
      mixin[name].call(object, ...args);
    };
  });

  return object;
}

let Professional = {
  invoice: function () {
    console.log(this.fullName() + ' is Billing customer');
  },

  payTax: function () {
    console.log(this.fullName() + ' is Paying taxes');
  },
};

let doctor = extend(new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics'), Professional);
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'

let professor = extend(new Professor('foo', 'bar', 21, 'gender', 'Systems Engineering'), Professional);
professor.eat();                              // logs 'Eating'
professor.communicate();                      // logs 'Communicating'
professor.sleep();                            // logs 'Sleeping'
console.log(professor.fullName());            // logs 'foo bar'
professor.teach();                            // logs 'Teaching'

doctor.invoice();                          // logs 'foo bar is Billing customer'
doctor.payTax();                           // logs 'foo bar Paying taxes'

Professional.invoice = function () {
  console.log(this.fullName() + ' is Asking customer to pay');
};

doctor.invoice();                          // logs 'foo bar is Asking customer to pay'
professor.invoice();                       // logs 'foo bar is Asking customer to pay'
professor.payTax();                        // logs 'foo bar Paying taxes'