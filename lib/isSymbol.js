"use strict";

/**
 * Is val an instance of Symbol
 * @param {*} val 
 * @returns boolean
 */
const isSymbol = (val) => {
  if(!val)
    return false

  return (
    Object.prototype.toString.call(val) === '[object Symbol]'
  )
}

module.exports = isSymbol;
