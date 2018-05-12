"use strict";

/**
 * Is val an instance of Generator
 * @param {*} val 
 * @returns boolean
 */
const isGenerator = (val) => {
  if(!val)
    return false

    return (
      Object.prototype.toString.call(val) === '[object Generator]'
    );
}

module.exports = isGenerator;
