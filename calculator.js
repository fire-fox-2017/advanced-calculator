"use strict";

class Calculator {
  //write your code here
  constructor(initValue){
    this.valueA = initValue
    this.result = 0
    this.phi = 3.14
  }

  sum(newValue){
    this.result = this.valueA + newValue
    return this
  }

  sub(newValue){
    this.result -= newValue
    return this
  }

  multiple(newValue){
    this.result *= newValue
    return this
  }

  power(power){
    this.result = Math.pow(this.result, power)
    return this
  }

  squareRoot(){
    this.result = Math.sqrt(this.result)
    return this
  }

  display(){
    return this.result
  }
}
/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
let cal = new Calculator(2)
console.log(cal.sum(4).sub(3).multiple(10).power(2).squareRoot().display())

module.exports = {
  Calculator
}
