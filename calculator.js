'use strict'

class Calculator {
  //write your code here
  constructor (x) {
    this.value = x;
  }
  add (diTambah) {
    this.value += diTambah;
    return this;
  }
  substract (diKurang) {
    this.value -= diKurang;
    return this;
  }
  multiply (diKali) {
    this.value *= diKali;
    return this;
  }
  divide (diBagi) {
    this.value /= diBagi;
    return this;
  }
  square (pangkat) {
    this.value = Math.pow(this.value, pangkat);
    return this;
  }
  squareRoot (akarPangkat) {
    this.value = Math.sqrt(this.value);
    return this;
  }
}

let cal = new Calculator(5);
let hasil = cal.add(2).substract(3).square(2);

console.log(hasil);

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
