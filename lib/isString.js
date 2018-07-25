"use strict";

/**
 * Is val an instance of String
 * @param {*} val 
 * @returns boolean
 */
const isString = (val) => {
  return (
    val
    &&
    typeof val === 'string'
    ||
    val instanceof String
  );
}

module.exports = isString;
