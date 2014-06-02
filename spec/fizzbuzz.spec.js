'use strict';

var expect   = require('chai').expect,

    Fizzbuzz = require('../src/fizzbuzz'),

    _ = require('lodash');

describe('Fizzbuzz', function() {

    it('print number 1 to 100', function() {
        // prepare

        // expect

        // act
        var fizzbuzz = new Fizzbuzz();

        // assert
        expect(fizzbuzz.print().length).to.be.equal(100);
    });

    it('prints "Fizz" instead of 3', function() {
        // prepare

        // expect

        // act
        var fizzbuzz = new Fizzbuzz();
        // assert
        expect(fizzbuzz.print()[2]).to.be.equal("Fizz");
    });

    it('prints "Fizz" instead of any number divisible by 3 (with _.range)', function() {
        var fizzbuzz = new Fizzbuzz();

        var notdivisibleBy5 = function (num) {
            return num % 5 != 0
        };

        _.range(3,100,3).filter(notdivisibleBy5).forEach(function(i){
            expect(fizzbuzz.print()[i-1]).to.be.equal('Fizz')
        })


    });

    it('prints "Buzz" instead of any number divisible by 5 (with _.range)', function() {
        var fizzbuzz = new Fizzbuzz();

        var notdivisibleBy3 = function (num) {
            return num % 3 != 0
        };

        _.range(5,100,5).filter(notdivisibleBy3).forEach(function(i){
            expect(fizzbuzz.print()[i-1]).to.be.equal('Buzz')
        })

    });

    it('prints FizzBuzz when number is divisible 15', function() {
        var fizzbuzz = new Fizzbuzz();

        var divisibleBy3And5 = function (num) {
            return num % 3== 0 && num%5==0
        };

        _.range(1,100,1).filter(divisibleBy3And5).forEach(function(i){
            expect(fizzbuzz.print()[i-1]).to.be.equal('FizzBuzz')
        })
    });
});