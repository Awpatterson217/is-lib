"use strict";

/**
 * Is val an instance of Object
 * @param {*} val 
 * @returns boolean
 */
const isObject = (val) => {
  if(!val)
    return false

  return (
    Object.prototype.toString.call(val) === '[object Object]'
  )
}

module.exports = isObject;
