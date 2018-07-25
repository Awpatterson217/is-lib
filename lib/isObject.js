"use strict";

/**
 * Is val an Object
 * @param {*} val 
 * @returns boolean
 */
const isObject = (val) => {
  return !!(
    val === Object(val)
  );
}

module.exports = isObject;
