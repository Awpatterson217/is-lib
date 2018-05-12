"use strict";

/**
 * Is val an instance of Error, or
 * does thing descend Error
 * @param {*} val 
 * @returns boolean
 */
const isError = (val) => {
  if(!val)
    return false

  return (
    Object.prototype.toString.call(val) === '[object Error]'
    ||
    Error.prototype.isPrototypeOf(val)
  )
}

module.exports = isError;
