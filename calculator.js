'use strict'

class Calculator {
  //write your code here
  constructor (value) {
    this.num = value;
  }
  add (value) {
    this.num += value;
    return this.num;
  }
  substract (value) {
    this.num -= value;
    return this.num;
  }
  multiply (value) {
    this.num *= value;
    return this.num;
  }
  divide (value) {
    this.num /= value;
    return this.num;
  }
  square (value) {
    this.num = Math.pow(this.num , value);
    return this.num;
  }
  squareRoot (value) {
    this.num = Math.sqrt(this.num ,value);
    return this.num;
  }
  Circle(){
    this.num = 3.14 * (Math.pow(this.num , 2));
    return this.num;
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
// let my_Calculator = new Calculator(4);
// console.log(my_Calculator.square(2));

module.exports = {
  Calculator
}
