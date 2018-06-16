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
    typeof str === 'string'
    ||
    str instanceof String
  )
}

module.exports = isString;
