/*

 "When I see a bird that walks like a duck and swims like a duck and quacks like a duck,
  I call that bird a duck" - James Whitcomb Riley, American writer, poet, and best selling author

 Task:

   Write a function `duckCount` that returns the number of arguments passed to it which
   have a property 'quack' defined directly on them. Do not match values inherited from prototypes.

 Example:

   var duckImpostor = Object.create({ quack: true })
   var duck         = { quack: true }

   duckCount(duck, duckImpostor) // returns: 1

 Conditions:

   * Do not use any for/while loops.
   * Do not create any counter/accumulator variables.

 Hint:

   * The arguments variable, available in every function, is an object that "quacks" like an Array:

     {
       0: 'argument0',
       1: 'argument1', // etc
       length: 2
     }

 Resources:

   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice#Array-like
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments

 */

'use strict';

module.exports = function duckCount() {
    return Array.prototype.filter.apply(arguments, [function(item) {
        return Object.prototype.hasOwnProperty.apply(item, ['quack']);
    }]
    ).length;
//    var count = 0;
//    for (var i = 0; i < arguments.length; i++) {
//        var obj = arguments[i];
//        if (Object.prototype.hasOwnProperty.apply(obj, ['quack'])) {
//            count++;
//        }
//    }
//
//    return count;
};