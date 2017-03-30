'use strict'

class Calculator {
  //write your code here
  constructor (value) {
    this.value = value;
  }
  add (x) {
    this.value += x;
    return this;
  }
  substract (x) {
    this.value -= x;
    return this;
  }
  multiply (x) {
    this.value *= x;
    return this;
  }
  divide (x) {
    this.value /= x;
    return this;
  }
  square () {
    this.value = Math.pow(this.value,2);
    return this;
  }
  squareRoot () {
    this.value = Math.sqrt(this.value);
    return this;
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = {
  Calculator
}
