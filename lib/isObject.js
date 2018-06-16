"use strict";

/**
 * Is val an instance of Object
 * @param {*} val 
 * @returns boolean
 */
const isObject = (val) => {
  return (
    val === Object(val)
  )
}

module.exports = isObject;
