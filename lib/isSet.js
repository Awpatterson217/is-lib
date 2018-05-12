"use strict";

/**
 * Is val an instance of Set
 * @param {*} val 
 * @returns boolean
 */
const isSet = (val) => {
  if(!val)
    return false

  return (
    Object.prototype.toString.call(val) === '[object Set]'
  )
}

module.exports = isSet;
