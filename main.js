'use strict'

const {Calculator} = require("./calculator.js")

// execute function on calculator.js in here

let calc = new Calculator();
calc.add(10).substract(2).print(); // 10-2 = 8
calc.multiply(4).divide(2).print(); // 4 / 2 = 2
calc.square(16).print();  // akar 16 = 4
calc.getCircleArea(5).print(); 
calc.squareRoot(5).print();
