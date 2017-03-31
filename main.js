'use strict'

const {Calculator} = require("./calculator.js")

// execute function on calculator.js in here
let calc = new Calculator();
calc.add(1).show();
calc.clear().show();
calc.add(1).substract(2).show().divide(3).square().circleArea().squareRoot().show();
calc.clear().show();
