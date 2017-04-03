'use strict'

class Calculator {
  //write your code here
  constructor (bil1,bil2) {
    this._bil1=bil1;
    this._bil2=bil2;
    this.hasil=0;
  }
  add () {
    this.hasil= this._bil1 + this._bil2;
    return this;
  }
  substract () {
    this.hasil= this._bil1 + this._bil2;
    return this;
  }
  multiply () {
    this.hasil= this._bil1*this._bil2;
    return this;
  }
  divide () {
    this.hasil= this._bil1/this._bil2;
    return this;
  }
  square () {
    Math.pow(this.hasil,2);
    return this;
  }
  squareRoot () {
    Math.sqrt(this.hasil);
    return this;
  }
  print()
  {
    console.log(this.hasil);
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
var hitung = new Calculator(2,4);

hitung.add().substract ().multiply ().divide ().square ().squareRoot ().print();


module.exports = {
  Calculator
}
