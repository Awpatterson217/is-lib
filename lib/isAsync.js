"use strict";

/**
 * Is val an asynchronous function
 * @param {*} val 
 * @returns boolean
 */
const isAsync = (val) => {
  if(!val)
    return false
  return (
    val.constructor.name === 'AsyncFunction'
  )
}

module.exports = isAsync;
