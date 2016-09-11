"use strict";
const onSpace = " ";

function isMutipleOf(factor, number) {
  return (number % factor) == 0;
}

function convert(aString) {
  var numbers = aString.split(onSpace);
  var fizzBuzzedResults = numbers.map((number) => {
    if(isMutipleOf(15, number)) return "fizzbuzz";
    if(isMutipleOf(5, number)) return "buzz";
    if(isMutipleOf(3, number)) return "fizz";
    else return number;
  });
  return fizzBuzzedResults.join(" ");
}

module.exports = {
  convert
}
