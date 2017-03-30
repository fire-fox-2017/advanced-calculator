'use strict'

class Calculator {
  //write your code here
  constructor () {
    this._angka = 0;
    this._pi = 3.14;
  }
  add (angka) {
    this._angka += angka;
    return this;
  }
  substract (angka) {
    this._angka -= angka;
    return this;
  }
  multiply (angka) {
    this._angka *= angka;
    return this;
  }
  divide (angka) {
    this._angka /= angka;
    return this;
  }
  square (angka) {
    this._angka = Math.pow(this._angka , angka);
    return this;
  }
  squareRoot (angka) {
    this._angka = Math.sqrt(this._angka ,angka);
    return this;
  }

  getCircleArea(){
    this._angka = 3.14 * (Math.pow(this._angka , 2));
    return this;
  }

  print(){
    console.log(this._angka);
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
