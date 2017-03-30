'use strict'

class Calculator {
  //write your code here
  constructor (data = 0) {
    this.data = data;
    return this;
  }
  add (number) {
    this.data += number;
    return this;
  }
  substract (number) {
    this.data -= number;
    return this;
  }
  multiply (number) {
    this.data *= number;
    return this;
  }
  divide (number) {
    this.data /= number;
    return this;
  }
  square () {
    this.data **= 2;
    return this;
  }
  power (number) {
    this.data **= number;
    return this;
  }
  squareRoot () {
    this.data **= (1/2);
    return this;
  }
  circleArea () {
    this.data **= 2 * Math.PI;
    return this;
  }
  clear () {
    this.data = 0;
    return this;
  }
  print () {
    console.log(this.data);
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
let calculator = new Calculator();
calculator.add(5).substract(3).multiply(4).divide(2).square().power(2).squareRoot().circleArea(7).print();
calculator.clear().print();

module.exports = {
  Calculator
}
