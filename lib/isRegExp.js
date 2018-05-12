"use strict";

/**
 * Is val an instance of RegExp
 * @param {*} val 
 * @returns boolean
 */
const isRegExp = (val) => {
  if(!val)
    return false

  return (
    Object.prototype.toString.call(val) === '[object RegExp]'
  )
}

module.exports = isRegExp;
