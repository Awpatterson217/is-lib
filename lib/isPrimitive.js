"use strict";

const isNumber    = require('./isNumber');
const isBoolean   = require('./isBoolean');
const isNull      = require('./isNull');
const isString    = require('./isString');
const isSymbol    = require('./isSymbol');
const isUndefined = require('./isUndefined');

/**
 * Is val an instance of a primitive data type
 * @param {*} val 
 * @returns boolean
 */
const isPrimitive = (val) => {
  return !!(
    isNumber(val)
    ||
    isBoolean(val)
    ||
    isNull(val)
    ||
    isString(val)
    ||
    isSymbol(val)
    ||
    isUndefined(val)
  );
}

module.exports = isPrimitive;
