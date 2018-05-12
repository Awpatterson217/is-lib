"use strict";
/**
 * IMPORTANT: Will not work if GeneratorFunction was explicitly bound
 * to scope with '.bind()'
 */

/**
 * Is val an instance of GeneratorFunction
 * @param {*} val 
 * @returns boolean
 */
const isGeneratorFn = (val) => {
  if(!val)
    return false

    return (
      Object.prototype.toString.call(val) === '[object GeneratorFunction]'
    );
}

module.exports = isGeneratorFn;
