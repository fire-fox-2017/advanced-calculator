'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this._value=num;
  }

  add (num) {
    this._value += num;
    return this;
  }

  substract (num) {
    this._value = this._value - num;
    return this;
  }

  multiply (num) {
    this._value = this._value * num;
    return this;
  }

  divide (num) {
    this._value = this._value/num;
    return this;
  }

  square () {
    this._value = Math.pow(this._value, 2);
    return this;
  }

  squareRoot () {
    this._value = Math.sqrt(this._value, 2);
    return this;
  }

  luasLingkaran(){
    this._value = Math.PI * this._value * this._value;
    return this;
  }

  print(){
    return console.log(`Hasil Akhir : ${this._value}`);
  }
}

let calculator = new Calculator(3)

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

calculator.add(4).substract(4).multiply(2).divide(2).square().squareRoot().print();
calculator.luasLingkaran(7).print();



module.exports = {
  Calculator
}
