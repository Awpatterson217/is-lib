"use strict";

/**
 * Is val an asynchronous function
 * @param {*} val 
 * @returns boolean
 */
const isAsync = (val) => {
  return !!(
    val
    &&
    val.constructor.name === 'AsyncFunction'
  );
}

module.exports = isAsync;
