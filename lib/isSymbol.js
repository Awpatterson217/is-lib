"use strict";

/**
 * Is val an instance of Symbol
 * @param {*} val 
 * @returns boolean
 */
const isSymbol = (val) => {
  return (
    val
    &&
    {}.toString.call(val) === '[object Symbol]'
  );
}

module.exports = isSymbol;
