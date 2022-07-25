let chalk = require("chalk");

// console.log(chalk.green.underline.inverse('True'));
// console.log(chalk.red.underline.inverse('False'));

let validator = require("validator")

validator.isEmail('Sourabh@bar.com'); //=> true
console.log(validator);