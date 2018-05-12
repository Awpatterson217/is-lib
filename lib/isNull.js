"use strict";

/**
 * Is val an instance of Null
 * @param {*} val
 * @returns boolean
 */
const isNull = (val) => {
  return (
    Object.prototype.toString.call(val) === '[object Null]'
  )
}

module.exports = isNull;
