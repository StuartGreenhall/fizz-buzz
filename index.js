"use strict";

const FizzbuzzTransform = require('./lib/fizz-buzz-convert.js');
const FizzbuzzReport = require('./lib/fizz-buzz-report.js');

const onSpace = " ";

function convert(aString) {
  let numbers = aString.split(onSpace);
  let luckified = FizzbuzzTransform.luckyNumbers(numbers)
  let results = FizzbuzzTransform.multiples(luckified);
  let report = FizzbuzzReport.create(results);
  console.log(report);
  return results.join(" ");
}

module.exports = {
  convert
}
