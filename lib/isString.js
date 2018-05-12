"use strict";

/**
 * Is val an instance of String
 * @param {*} val 
 * @returns boolean
 */
const isString = (val) => {
  if(!val)
    return false

  return (
    Object.prototype.toString.call(val) === '[object String]'
  )
}

module.exports = isString;
