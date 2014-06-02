/*

 Task:

 When 'bouncer' is called with a 'guestList', it returns a function that returns true if all
 of the supplied 'guests' exist on the original 'guestList'

 The 'bouncer' only checks if the ids match.

 Conditions:

 * Do not use any for/while loops.

 Hints:

 Use array#some and Array#every to check if every user passed to your returned
 function exists in the array passed to the exported function.

 Resources:

 * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every
 * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some

 */

'use strict';
module.exports = function bouncer(guestList) {
   // var shouldBeLetIn = bouncer(guestList);

   // expect(shouldBeLetIn(guests)).to.be.false;
    return function(guests) {
        // return ...
        // Solution #1
        /*for (var i =0; i<guests.length; i++) {
            var found = false;
            for (var j=0; j<guestList.length; j++){
                if (guestList[j].id == guests[i].id) {
                    found = true;
                    break;
                }
            }
            if (!found)
              return false;

        }
        return true;
        */

        // Solution #2
        /*
        var ids = guestList.map(function(g) {
            return g.id;
        });

        return guests.map(function(guest){
            // can we return now ?
            return ids.indexOf(guest.id)!=-1;
        }).reduce(function(a,b) {
            return a&&b;
        })
        */
        // Solution #3
/*
        var ids = guestList.map(function(g) {
            return g.id;
        });

        return guests.every(function(element, index, array){
            return ids.indexOf(element.id)!=-1;
        });
        */

        // Solution #4
         return guests.every(function(element, index, array){
            return guestList.some(function(valid,index,array){
                 return element.id === valid.id;
             });
         });
    };
};