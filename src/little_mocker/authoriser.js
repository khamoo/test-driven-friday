'use strict';

/**
 * @constructor
 */
function Authoriser() { }

/**
 * @param {String} username
 * @param {String} password
 *
 * @returns {Boolean}
 */
Authoriser.prototype.authorise = function(username, password) {
    console.info('Authoriser#authorise calls an external system ...');

    // returns true or false randomly, so we're not tempted to rely on its behaviour ;-)
    return (Math.random() < 0.5);
};

module.exports = Authoriser;