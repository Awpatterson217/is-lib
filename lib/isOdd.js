"use strict";

const isNumber = require('./isNumber');

/**
 * Is val an odd integer
 * @param {*} val 
 * @returns boolean
 */
const isOdd = (val) => {
  const num = Number(val);
  const numCheck = (
    !isNumber(num)
    ||
    !Number.isInteger(num)
    ||
    Number.isNaN(num)
    ||
    !Number.isFinite(num)
  );

  if(numCheck)
    return false;

  return !!(num % 2)
}

module.exports = isOdd;
