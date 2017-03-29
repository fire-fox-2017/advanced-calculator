'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.data = 0
    return this
  }
  add (x) {
    this.data = this.data + x
    return this
  }
  substract (x) {
    this.data = this.data - x
    return this
  }
  multiply (x) {
    this.data = this.data * x
    return this
  }
  divide (x) {
    this.data = this.data / x
    return this
  }
  square (x) {
    this.data = Math.pow(this.data, x)
    return this
  }
  squareRoot () {
    this.data = Math.sqrt(this.data)
    return this.data
  }
}
let coba = new Calculator()
console.log(coba.add(10).substract(2).multiply(4).divide(1).square(2).squareRoot());


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
