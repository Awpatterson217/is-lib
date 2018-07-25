"use strict";

/**
 * Is val an instance of Null
 * @param {*} val
 * @returns boolean
 */
const isNull = (val) => {
  return !!(
    {}.toString.call(val) === '[object Null]'
  );
}

module.exports = isNull;
