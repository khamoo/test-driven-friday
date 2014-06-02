/*

 Array#reduce

 Task: Given an Array of strings, use Array#reduce to create an object that
 contains the number of times each string occurred in the array.

 Conditions:

 * Do not use any for/while loops.
 * You do not need to define any additional functions

 Resources:

 * https://en.wikipedia.org/wiki/Reduce_(higher-order_function)
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

 */
'use strict';
var _ = require('lodash');

module.exports = function(inventory) {
    // Solution #1
    /*var result = {};
    for(var i=0; i<inventory.length; i++){
        if(typeof(result[inventory[i]]) != 'undefined'){
            result[inventory[i]]++;
        }else{
            result[inventory[i]] = 1;
        }
    }
    return result;*/

    // Solution #2
    return  _.countBy(inventory, function(text) { return text; } );
};