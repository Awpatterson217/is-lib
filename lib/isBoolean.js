"use strict";

/**
 * Is val an instance of Boolean
 * @param {*} val 
 * @returns boolean
 */
const isBoolean = (val) => {
  return !!(
    val
    &&
    {}.toString.call(val) === '[object Boolean]'
  );
}

module.exports = isBoolean;
