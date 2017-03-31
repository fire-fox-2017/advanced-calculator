'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.result = 0;
    this.pi = Math.PI;
  }
  add (number) {
    this.result += number;
    return this;
  }
  substract (number) {
    this.result -= number;
    return this;
  }
  multiply (number) {
    this.result *= number;
    return this;
  }
  divide (number) {
    this.result /= number;
    return this;
  }
  square () {
    this.result = Math.pow(this.result, 2);
    return this;
  }
  power (number) {
    this.result = Math.pow(this.result, number);
    return this;
  }
  squareRoot () {
    this.result = Math.pow(this.result, (1/2));
    return this;
  }
  circleArea() {
    this.result = this.pi * Math.pow(this.result, 2);
    return this;
  }
  clear() {
    this.result = 0;
    return this;
  }
  show() {
    console.log(this.result);
    return this;
  }
}


let calc = new Calculator();
calc.add(10).show();
calc.substract(10).add(5).show();
calc.multiply(2).divide(10).show();
calc.add(1).square().show();
calc.squareRoot().show();



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
