"use strict";
require('should');

var FizzBuzz = require('../index');


describe("Fizz Buzz-ing a string thats delimited by a space",() =>{
  it("should convert multiples of 3 into 'fizz' AND multiples of 5 into 'buzz' AND multiples of 15 into 'fizzbuzz'", () => {
    FizzBuzz.convert("1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20")
            .should.equal("1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz 16 17 fizz 19 buzz");
  });
})
