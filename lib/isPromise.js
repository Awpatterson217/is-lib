"use strict";

/**
 * Is val an instance of Promise
 * @param {*} val 
 * @returns boolean
 */
const isPromise = (val) => {
  if(!val)
    return false

  return (
    Object.prototype.toString.call(val) === '[object Promise]'
  )
}

module.exports = isPromise;
