"use strict";

/**
 * Is val an instance of Map
 * @param {*} val 
 * @returns boolean
 */
const isMap = (val) => {
  if(!val)
    return false

  return (
    Object.prototype.toString.call(val) === '[object Map]'
  )
}

module.exports = isMap;
