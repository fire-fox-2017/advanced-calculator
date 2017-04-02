'use strict'

class Calculator {
  //write your code here
  constructor (num = 0) {
    this.num=num;
  }
  add (value) {
    this.num+=value;
    return this;
  }
  substract (value) {
    this.num-=value;
    return this;
  }
  multiply (value) {
    this.num*=value;
    return this;
  }
  divide (value) {
    this.num/=value;
    return this;
  }
  square (value) {
    this.num=Math.pow(this.num, value);
    return this;
  }
  squareRoot () {
    this.num=Math.sqrt(this.num);
    return this;
  }
  elipsSum(){
    this.num=(this.num*this.num)*Math.PI;
    return this;
  }
  equalTo() {
    console.log(this);
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
let thisCalculator = new Calculator();

thisCalculator.add(6).substract(4).multiply(2).divide(2).square(2).squareRoot().elipsSum().equalTo();
thisCalculator.add(8).substract(6).multiply(10).divide(4).square(1).squareRoot().elipsSum().equalTo();
module.exports = {
  Calculator
}
