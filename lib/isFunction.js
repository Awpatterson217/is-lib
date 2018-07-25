"use strict";

/**
 * Is val an instance of Function
 * @param {*} val 
 * @returns boolean
 */
const isFunction = (val) => {
  return !!(
    val
    &&
    {}.toString.call(val) === '[object Function]'
  );
}

module.exports = isFunction;
