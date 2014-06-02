'use strict';

var expect   = require('chai').expect,

    Calculator = require('../src/calculator');

describe('Calculator', function() {

    it('return 0 with empty string', function() {
        // prepare

        // expect

        // act
        var calculator = new Calculator();

        // assert
        expect(calculator.add('')).to.be.equal(0);

    });

    it('return the same number when providing with single number', function(){
       //prepare

        //expect


        //act
        var input="1";
        var calculator = new Calculator();

        //assert
        expect(calculator.add(input)).to.be.equal(1);
    });

    it('return total for two numbers input', function(){
        //prepare

        //expect


        //act
        var input="1,2";
        var calculator = new Calculator();

        //assert
        expect(calculator.add(input)).to.be.equal(3);
    });

    it('return 0 for undefind input', function() {
        expect(new Calculator().add(undefined)).to.be.equal(0)
    })

    it('return 0 fo null input', function() {
        expect(new Calculator().add(null)).to.be.equal(0)
    })

    it('return sums the inputs with carriage return separators', function() {
        expect(new Calculator().add("1\n2")).to.be.equal(3)
    })

    it('return sums the inputs with commas or carriage returns', function() {
        expect(new Calculator().add("42\n2,3")).to.be.equal(47)
    })

    it('use custom delimeter from first line', function() {
        expect(new Calculator().add("//;\n1;2")).to.be.equal(3)
    })

    it('use another custom delimeter from first line', function() {
        expect(new Calculator().add("//_\n1_2")).to.be.equal(3)
    })

    it('negatives not allowed', function() {
        expect(new Calculator().add("//_\n-1_2")).to.be.equal("negatives -1 not allowed")
    })

//    it('return sums the inputs with commas or carriage returns', function() {
//        expect(new Calculator().add("1,\n2")).not.equal(3) // should error
//    })

});