"use strict";

/**
 * Does val implement the Iterable interface
 * @param {*} val 
 * @returns boolean
 */
const isIterator = (val) => {
  if(!val)
    return false

    return (
      typeof val.next === 'function'
    );
}

module.exports = isIterator;
