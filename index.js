"use strict";
/**
 * @fileOverview A library of simple predicates
 * @author <a href="mailto:awpatterson217@gmail.com">Adam W Patterson</a>
 * @version 1.0.0
 */

const isPromise     = require('./lib/isPromise');
const isIterable    = require('./lib/isIterable');
const isIterator    = require('./lib/isIterator');
const isGeneratorFn = require('./lib/isGeneratorFn');
const isGenerator   = require('./lib/isGenerator');
const isArray       = require('./lib/isArray');
const isObject      = require('./lib/isObject');
const isFunction    = require('./lib/isFunction');
const isDate        = require('./lib/isDate');
const isMap         = require('./lib/isMap');
const isWeakMap     = require('./lib/isWeakMap');
const isSet         = require('./lib/isSet');
const isWeakSet     = require('./lib/isWeakSet');
const isSymbol      = require('./lib/isSymbol');
const isString      = require('./lib/isString');
const isNumber      = require('./lib/isNumber');
const isBoolean     = require('./lib/isBoolean');
const isError       = require('./lib/isError');
const isRegExp      = require('./lib/isRegExp');
const isOdd         = require('./lib/isOdd');
const isEven        = require('./lib/isEven');
const isUndefined   = require('./lib/isUndefined');
const isNull        = require('./lib/isNull');
const isPrimitive   = require('./lib/isPrimitive');
const isBuffer      = require('./lib/isBuffer');
const isNegative    = require('./lib/isNegative');
const isPositive    = require('./lib/isPositive');
const isGlobalVal   = require('./lib/isGlobal');
const isAsync       = require('./lib/isAsync');

module.exports = {
  isDate,
  isFunction,
  isObject,
  isArray,
  isMap,
  isWeakMap,
  isSet,
  isWeakSet,
  isSymbol,
  isString,
  isNumber,
  isBoolean,
  isError,
  isRegExp,
  isPromise,
  isIterable,
  isIterator,
  isGeneratorFn,
  isGenerator,
  isEven,
  isOdd,
  isUndefined,
  isNull,
  isPrimitive,
  isBuffer,
  isNegative,
  isPositive,
  isGlobalVal,
  isAsync
}