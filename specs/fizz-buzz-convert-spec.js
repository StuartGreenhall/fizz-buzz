"use strict";
require('should');

var FizzBuzz = require('../lib/fizz-buzz-convert');

describe("Fizz Buzz-ing a string thats delimited by a space",() =>{
  it("should convert multiples of 3 into 'fizz'", () => {
    FizzBuzz.transformMultiples(["1", "2", "3", "4", "6"]).should.eql(["1", "2", "fizz", "4", "fizz"]);
  });

  it("should convert multiples of 5 into 'buzz' ", () => {
    FizzBuzz.transformMultiples(["5", "8", "10", "11", "20"]).should.eql(["buzz", "8", "buzz", "11" ,"buzz"]);
  })

  it("should convert multiples of 15 into 'fizzbuzz' ", () => {
    FizzBuzz.transformMultiples(["15", "8", "30", "11", "22"]).should.eql(["fizzbuzz", "8", "fizzbuzz", "11" ,"22"]);
  })
})
