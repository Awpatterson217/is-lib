"use strict";

/**
 * Is val an instance of Set
 * @param {*} val 
 * @returns boolean
 */
const isSet = (val) => {
  return (
    val
    &&
    {}.toString.call(val) === '[object Set]'
  );
}

module.exports = isSet;
