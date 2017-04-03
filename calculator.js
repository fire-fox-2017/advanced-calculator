'use strict'

class Calculator {
  //write your code here
  constructor (firstNum = 0) {
    this.firstNum = firstNum;
    return this;
  }
  add (number) {
    this.firstNum = this.firstNum+number;
    return this;
  }
  substract (number) {
    this.firstNum = this.firstNum-number;
    return this;
  }
  multiply (number) {
    this.firstNum = this.firstNum*number;
    return this;
  }
  divide (number) {
    this.firstNum = this.firstNum/number;
    return this;
  }
  square () {
    this.firstNum = this.firstNum*this.firstNum;
    return this;
  }
  squareRoot () {
    this.firstNum = Math.sqrt(this.firstNum);
    return this;
  }
  circle(){
    this.firstNum = Math.PI * this.firstNum;
    return this;
  }
  print(){
    console.log(this.firstNum);
  }
}
var calc = new Calculator();
calc.add(5)
  .substract(3)
  .multiply(4)
  .divide(2)
  .square()
  .squareRoot()
  .circle()
  .print();

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
