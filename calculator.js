'use strict'

class Calculator {
  //write your code here
  constructor (angka) {
    this.hasil=angka;
  }
  add (angka) {
    this.hasil= this.hasil + angka;
    return this;
  }
  substract (angka) {
    this.hasil= this.hasil + angka;
    return this;
  }
  multiply (angka) {
    this.hasil= this.hasil*angka;
    return this;
  }
  divide (angka) {
    this.hasil= this.hasil/angka;
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
var hitung = new Calculator(2);

hitung.add(2).substract (3).multiply (2).divide (3).square ().squareRoot ().print();


module.exports = {
  Calculator
}
