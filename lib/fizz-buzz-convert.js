"use strict";

const words = require('./const');

function isMutipleOf(factor, number) {
  return (number % factor) == 0;
}

function luckyNumbers(numbers) {
  return numbers.map((number) => {
    if(number.includes('3')) return words.lucky;
    else return number;
  });
}
function multiples(numbers) {
  return numbers.map((number) => {
    if(isMutipleOf(15, number)) return words.fizzbuzz;
    if(isMutipleOf(5, number)) return words.buzz;
    if(isMutipleOf(3, number)) return words.fizz;
    else return number;
  });
}

module.exports = {
  luckyNumbers,
  multiples
}
