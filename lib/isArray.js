"use strict";

/**
 * Is val an instance of Array
 * @param {*} val 
 * @returns boolean
 */
const isArray = (val) => {
  return !!(
    val
    &&
    {}.toString.call(val) === '[object Array]'
  );
}

module.exports = isArray;
