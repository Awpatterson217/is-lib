"use strict";

/**
 * Is val an instance of Generator
 * @param {*} val 
 * @returns boolean
 */
const isGenerator = (val) => {
  return !!(
    val
    &&
    {}.toString.call(val) === '[object Generator]'
  );
}

module.exports = isGenerator;
