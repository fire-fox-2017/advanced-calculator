'use strict'

const {Calculator} = require("./calculator.js")

// execute function on calculator.js in here
let kal = new Calculator(5);
kal.add(2).substract(3).multiply(2).divide(2).square(2).squareRoot();
