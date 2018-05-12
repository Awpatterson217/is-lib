"use strict";
/**
 * Be wary that, because only complex data types are 
 * passed by reference, the value could exist both locally and globally,
 * but not be referring to the same variable.
 * 
 * Furthermore, the name of the variable is not taken into account, only global variables.
 */

/**
 * Does val exist in global scope
 * @param {*} val
 * @returns boolean
 * @throws
 */
const isGlobalVal = (val) => {
  const globalScope = global || window;

  if(!val)
    return false

  if(!globalScope)
    throw "Cannot access global scope!";

  for (let prop in globalScope) {
    if (globalScope[prop] === val)
      return true;
  }

  return false;
}

module.exports = isGlobalVal;
