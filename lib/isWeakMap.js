"use strict";

/**
 * Is val an instance of WeakMap
 * @param {*} val 
 * @returns boolean
 */
const isWeakMap = (val) => {
  return (
    val
    &&
    {}.toString.call(val) === '[object WeakMap]'
  );
}

module.exports = isWeakMap;
