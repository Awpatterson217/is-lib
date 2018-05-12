"use strict";

/**
 * Is val an instance of Array
 * @param {*} val 
 * @returns boolean
 */
const isArray = (val) => {
  if(!val)
    return false

  return (
    Object.prototype.toString.call(val) === '[object Array]'
  )
}

module.exports = isArray;
