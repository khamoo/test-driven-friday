/*

 Implement Array#reduce using recursion.

 For simplicity, your implementation of reduce
 **need not replicate the behaviour of a reduce missing an initial value**.
 You may assume the initial value will always be supplied.

 Arguments

 * list: An list (one-dimensional listay) to reduce over
 * fn:   Function to use as the reduction step.
         Like regular Array#reduce, this function must be passed:
         * previousValue
         * currentValue
         * index
         * list we're iterating over.
 * initial: Initial value of the reduction.
         Unlike Array#reduce, this value is required (and you may assume it will always be supplied).

 Conditions

 * Do not use any for/while loops.
 * Do not use any Array methods like map or reduce.

 Resources

 * https://en.wikipedia.org/wiki/Recursion
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

 */

'use strict';
module.exports = function reduce(list, fn, initial) {
    // return ...
    if (list.length == 0) {
        return 0;
    } else if (list.length == 1) {
        return fn(initial, list[0], 0, list);
    } else {
        return reduce(list.slice(1), fn, fn(initial, list[0], 0, list));
    }
    //#1 - [2, 3], fn, fn(0, 1, 0, [1, 2, ])
    //#2 - [3], fn, fn(1, 2, 0, [2, 3])
    //#3 = [], fn, fn(3, 3, 0 [3])
};