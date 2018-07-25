"use strict";

/**
 * Is val an instance of RegExp
 * @param {*} val 
 * @returns boolean
 */
const isRegExp = (val) => {
  return (
    val
    &&
    {}.toString.call(val) === '[object RegExp]'
  );
}

module.exports = isRegExp;
