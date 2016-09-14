"use strict";
const words = require('./const');

function create(numbers) {
  var report = {};
  report[words.fizz] = 0;
  report[words.buzz] = 0;
  report[words.fizzbuzz] = 0;
  report[words.lucky] = 0;
  report["integer"] = 0;

  numbers.forEach((string) => {
    if(string === words.fizz) {
      report[words.fizz]++;
      return;
    }
    if(string === words.buzz) {
      report[words.buzz]++;
      return;
    }
    if(string === words.fizzbuzz) {
      report[words.fizzbuzz]++;
      return;
    }
    if(string === words.lucky) {
      report[words.lucky]++;
      return;
    }
    else {
      report["integer"]++;
    };
  });
  return report;
}

module.exports = {
  create
}
