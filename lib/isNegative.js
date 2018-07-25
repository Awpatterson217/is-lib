"use strict";

const isNumber = require('./isNumber');

/**
 * Is val a negative number
 * @param {*} val
 * @returns boolean
 */
const isNegative = (val) => {
  if(!isNumber(val))
    return false;

  return !!(
    Math.sign(val) === -1
    ||
    Math.sign(val) === -0
  );
}

module.exports = isNegative;
