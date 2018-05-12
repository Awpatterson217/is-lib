"use strict";

/**
 * Is val an instance of Number
 * @param {*} val 
 * @returns boolean
 */
const isNumber = (val) => {
  if(!val)
    if(val !== 0)
      return false

  return (
    Object.prototype.toString.call(val) === '[object Number]'
  )
}

module.exports = isNumber;
