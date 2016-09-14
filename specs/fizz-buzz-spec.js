"use strict";
require('should');

var FizzBuzz = require('../index');

describe("Fizz Buzz-ing a string thats delimited by a space",() =>{
  it("should replace instances of 3 with 'lucky' while contiuning to do fizz buzz for multiples of 3, 5 & 15 ", () => {
    let output = "1 2 lucky 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz 16 17 fizz 19 buzz" +
                 "\nfizz: 4 \nbuzz: 3\nfizzbuzz:1 \nlucky:2 \n integer:10"

    FizzBuzz.convert("1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20")
            .should.equal(output);
  });
})
