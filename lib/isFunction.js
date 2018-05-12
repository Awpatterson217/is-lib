"use strict";

/**
 * Is val an instance of Function
 * @param {*} val 
 * @returns boolean
 */
const isFunction = (val) => {
  if(!val)
    return false

  return (
    Object.prototype.toString.call(val) === '[object Function]'
  )
}

module.exports = isFunction;
