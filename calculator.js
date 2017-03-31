'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.newResult = 0
  }
  add (num) {
    this.newResult = this.newResult + num
    return this
  }
  substract (num) {
    this.newResult = this.newResult - num
    return this
  }
  multiply (num) {
    this.newResult = this.newResult * num
    return this
  }
  divide (num) {
    this.newResult = this.newResult / num
    return this
  }
  square (num) {
    this.newResult = Math.pow(this.newResult, num)
    return this
  }
  squareRoot () {
    this.newResult = Math.sqrt(this.newResult)
    return this
  }
  print(){
    console.log(this.newResult);
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
