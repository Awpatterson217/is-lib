"use strict";

/**
 * Is val undefined
 * @param {*} val 
 * @returns boolean
 */
const isUndefined = (val) => {
  return (
    val === void 0
  );
}

module.exports = isUndefined;
