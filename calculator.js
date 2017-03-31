'use strict'

class Calculator {
  //write your code here
  constructor (value) {
    this.hasil=value;
  }
  add (tambah) {
    this.hasil+=tambah;
    // console.log(this.hasil);
    return this;
  }
  substract (kurang) {
    this.hasil-=kurang;
    // console.log(this.hasil);
    return this;
  }
  multiply (kali) {
    this.hasil*=kali;
    // console.log(this.hasil);
    return this;
  }
  divide (bagi) {
    this.hasil/=bagi;
    // console.log(this.hasil);
    return this;
  }
  square (pangkat) {
    this.hasil =Math.pow(this.hasil,pangkat)
    // console.log(this.hasil);
    return this;
  }
  squareRoot () {
    this.hasil=Math.sqrt(this.hasil);
    console.log(this.hasil);
    return this;
  }
  pi(){
    return Math.PI;

  }
}

// let kal = new Calculator(5);
// kal.add(2).substract(3).multiply(2).divide(2).square(2).squareRoot();



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
