"use strict";

/**
 * Does val implement the Iterable interface
 * @param {*} val 
 * @returns boolean
 */
const isIterator = (val) => {
  return !!(
    val
    &&
    typeof val.next === 'function'
  );
}

module.exports = isIterator;
