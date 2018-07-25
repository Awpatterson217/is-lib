"use strict";

/**
 * Is val an instance of Date
 * @param {*} val
 * @returns boolean 
 */
const isDate = (val) => {
  return !!(
    val
    &&
    {}.toString.call(val) === '[object Date]'
  );
}

module.exports = isDate;
