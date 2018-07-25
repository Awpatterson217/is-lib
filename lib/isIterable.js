"use strict";

/**
 * Does val implement the Iterable interface
 * @param {*} val 
 * @returns boolean
 */
const isIterable = (val) => {
  return !!(
    val
    &&
    typeof val[Symbol.iterator] === 'function'
  );
}

module.exports = isIterable;
