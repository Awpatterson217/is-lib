"use strict";

const isNumber = require('./isNumber');

/**
 * Is val a positive number
 * @param {*} val 
 * @returns boolean
 */
const isPositive = (val) => {
  if(!isNumber(val))
    return false;

  return (
    !!(
      Math.sign(val) === 1
      ||
      Math.sign(val) === 0
    )
  );
}

module.exports = isPositive;
