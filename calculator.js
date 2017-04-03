'use strict'

class Calculator {
  //write your code here
  constructor () {
    this._number = 0;
    }
  add (number) {
    this._number += number;
    return this;
  }
  substract (number) {
    this._number -= number;
    return this;
  }
  multiply (number) {
    this._number -= number;;
    return this;
  }
  divide (number) {
    this._number /= number;
    return this;
  }
  square (number) {
    this._number = Math.pow(this._number, 2);
    return this;
  }
  power (number) {
    this.number = Math.pow(this._number, number);
    return this;
  }
  squareRoot (number) {
    this._number = Math.sqrt(this._number, number);
    return this;
  }
  getCircleArea(){
  this._number = Math.PI * (Math.pow(this._number , 2));
    return this;
  }
  clear() {
    this._number = 0;
    return this;
  }
  print(){
    console.log(this._number);
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
