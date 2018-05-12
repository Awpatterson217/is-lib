"use strict";

/**
 * Is val an instance of Date
 * @param {*} val
 * @returns boolean 
 */
const isDate = (val) => {
  if(!val)
    return false

  return (
    Object.prototype.toString.call(val) === '[object Date]'
  )
}

module.exports = isDate;
