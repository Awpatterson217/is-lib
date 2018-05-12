"use strict";

/**
 * Is val an instance of WeakSet
 * @param {*} val 
 * @returns boolean
 */
const isWeakSet = (val) => {
  if(!val)
    return false

  return (
    Object.prototype.toString.call(val) === '[object WeakSet]'
  )
}

module.exports = isWeakSet;
