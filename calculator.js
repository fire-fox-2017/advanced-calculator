'use strict'

class Calculator {
  constructor (input = 0) {
    this._input = input;

  }
  add (num) {
    this._input += num;
    return this;
  }
  substract (num) {
    this._input -= num;
    return this;
  }
  multiply (num) {
    this._input *= num;
    return this;
  }
  divide (num) {
    this._input /= num;
    return this;
  }
  square (pow) {
    this._input = Math.pow(this._input,pow);
    return this;
  }
  squareRoot () {
    this._input = Math.sqrt(this._input);
    return this;
  }
  equal(){
    console.log(this._input);
  }
}
let angka = new Calculator();
angka.add(2).substract(1).multiply(11).divide(2).square(2).squareRoot().equal();



module.exports = {
  Calculator
}
