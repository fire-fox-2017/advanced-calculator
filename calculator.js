'use strict'

class Calculator {
  //write your code here
  constructor (value) {
    this.num = value;
  }
  add (value) {
    this.num += value;
    return this;
  }
  substract (value) {
    this.num -= value;
    return this;
  }
  multiply (value) {
    this.num *= value;
    return this;
  }
  divide (value) {
    this.num /= value;
    return this;
  }
  square (value) {
    this.num = Math.pow(this.num , value);
    return this;
  }
  squareRoot (value) {
    this.num = Math.sqrt(this.num ,value);
    return this;
  }
  Circle(){
    this.num = 3.14 * (Math.pow(this.num , 2));
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
