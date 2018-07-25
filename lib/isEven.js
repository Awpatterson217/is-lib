"use strict";

const isOdd = require('./isOdd');
const isNumber = require('./isNumber');

/**
 * Is val an even integer
 * @param {*} val 
 * @returns boolean
 */
const isEven = (val) => {
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

  return !!(
    !isOdd(num)
  );
}

module.exports = isEven;
