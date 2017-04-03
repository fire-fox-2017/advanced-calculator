'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.num = 0;
  }
  add (tambah) {
    this.num = this.num + tambah;
    return this;
  }
  substract (kurang) {
    this.num = this.num - kurang;
    return this;
  }
  multiply (kali) {
    this.num = this.num * kali;
    return this;
  }
  divide (bagi) {
    this.num = this.num / bagi;
    return this
  }
  square () {
     this.num = Math.pow(this.num, 2);
     return this
  }
  squareRoot () {
     this.num = Math.sqrt(this.num);
     return this
  }
  print (){
    console.log(this.num);
  }
}

let test = new Calculator();
test.add(5).multiply(5).substract(5).divide(5).square().squareRoot().print();
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
