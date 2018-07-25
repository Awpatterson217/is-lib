"use strict";

/**
 * Is val an instance of WeakSet
 * @param {*} val 
 * @returns boolean
 */
const isWeakSet = (val) => {
  return (
    val
    &&
    {}.toString.call(val) === '[object WeakSet]'
  );
}

module.exports = isWeakSet;
