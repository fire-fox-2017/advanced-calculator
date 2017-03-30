'use strict'

class Calculator {
  //write your code here
  constructor (num = 1) {
    this.num = num;
  }
  add (num) {
    this.num += num;
    return this;
  }
  substract (num) {
    this.num -= num;
    return this;
  }
  multiply (num) {
    this.num *= num;
    return this;
  }
  divide (num) {
    this.num /= num;
    return this;
  }
  square (num) {
    this.num = Math.pow(this.num, num);
    return this;
  }
  squareRoot () {
    this.num = Math.sqrt(this.num);
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

let calc = new Calculator();

let number = calc.add(2).substract(1).multiply(4).divide(2).square(3).squareRoot();

console.log(number.num);

module.exports = {
  Calculator
}
