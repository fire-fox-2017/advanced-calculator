'use strict'

class Calculator {
  //write your code here
  constructor () {
    this._num = 0;

  }
  add (num) {
    this._num = this._num + num;
    return this;
  }
  substract (num) {
    this._num = this._num - num;
    return this;
  }
  multiply (num) {
    this._num = this._num * num;
    return this;
  }
  divide (num) {
    this._num = this._num / num;
    return this;
  }
  square (num) {
    this._num = Math.pow(this._num, num);
    return this;
  }
  squareRoot () {
    this._num = Math.sqrt(this._num)
    return this;
  }
}

let angka = new Calculator()

console.log(angka.add(4).multiply(5));

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
