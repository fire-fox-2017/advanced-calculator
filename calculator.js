'use strict'

class Calculator {
  //write your code here
  constructor (num = 0) {
    this.num = num;
    this.pi = Math.PI;
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
  square (exponent) {
    this.num = Math.pow(this.num, exponent);
    return this;
  }
  squareRoot () {
    this.num = Math.sqrt(this.num);
    return this;
  }
  circleArea () {
    this.num = (this.num * this.num) * this.pi;
    return this;
  }
  equal () {
    console.log(this.num);
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

let myCalculator = new Calculator();

myCalculator.add(5).substract(3).multiply(2).divide(2).square(2).squareRoot().circleArea().equal();
myCalculator.add(2).substract(5).multiply(10).divide(7).square(1).squareRoot().circleArea().equal();

module.exports = {
  Calculator
}
