"use strict";
const onSpace = " ";

function isMutipleOf(factor, number) {
  return (number % factor) == 0;
}

function transformLuckyNumbers(numbers) {
  return numbers.map((number) => {
    if(number === '3') return "lucky";
    else return number;
  });
}
function transformMultiples(numbers) {
  return numbers.map((number) => {
    if(isMutipleOf(15, number)) return "fizzbuzz";
    if(isMutipleOf(5, number)) return "buzz";
    if(isMutipleOf(3, number)) return "fizz";
    else return number;
  });
}
function convert(aString) {
  let numbers = aString.split(onSpace);
  let luckified = transformLuckyNumbers(numbers)
  let results = transformMultiples(luckified);
  return results.join(" ");
}

module.exports = {
  convert,
  transformMultiples
}
