"use strict";

/**
 * Is val an instance of Map
 * @param {*} val 
 * @returns boolean
 */
const isMap = (val) => {
  return !!(
    val
    &&
    {}.toString.call(val) === '[object Map]'
  );
}

module.exports = isMap;
