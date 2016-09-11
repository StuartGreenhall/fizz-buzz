"use strict";
require('should');

var FizzBuzz = require('../index');


describe('Fizz Buzz-ing a string thats delimited by a space',() =>{
  it("should convert multiples of 3 into 'fizz'", () => {
    FizzBuzz.convert("1 2 3 4 5 6").should.equal("1 2 fizz 4 5 fizz");
  })
})
