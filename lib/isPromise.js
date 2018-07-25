"use strict";

/**
 * Is val an instance of Promise
 * @param {*} val 
 * @returns boolean
 */
const isPromise = (val) => {
  return (
    val
    &&
    {}.toString.call(val) === '[object Promise]'
  );
}

module.exports = isPromise;
