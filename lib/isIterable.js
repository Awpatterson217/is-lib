"use strict";

/**
 * Does val implement the Iterable interface
 * @param {*} val 
 * @returns boolean
 */
const isIterable = (val) => {
  if(!val)
    return false

  return (
    typeof val[Symbol.iterator] === 'function'
  );
}

module.exports = isIterable;
