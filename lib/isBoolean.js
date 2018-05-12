"use strict";

/**
 * Is val an instance of Boolean
 * @param {*} val 
 * @returns boolean
 */
const isBoolean = (val) => {
  if(!val)
    return false

  return (
    Object.prototype.toString.call(val) === '[object Boolean]'
  )
}

module.exports = isBoolean;
