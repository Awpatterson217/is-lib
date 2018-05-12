"use strict";

const assert = require('assert');

const {
  isArray,
  isObject,
  isFunction,
  isDate,
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
  isNegative,
  isPositive,
  isGlobalVal
} = require('../');

function myfunction() {
  console.log('myfuncton');
}

const myobject = {
  my: 'object'
}

const myarray = ['my', 'array'];

const mydate = new Date();

const mymap = new Map([[1, 'one'], [2, 'two']]);
const myweakmap = new WeakMap([[myobject, 'hey']]);

const myset = new Set([1, 2, 3, 4, 5]);
const myweakset = new WeakSet([myobject]);

const mysymbol = Symbol();

const mystring = 'mystring';
const mynumber = 12345;
const mynumberstring = '12345';
const myboolean = true;
const myevennum = 4;
const myoddnum = 5;
const myevennumtwo = '4';
const myoddnumtwo = '5';

const myerror = new Error();
const mytypeerror = new TypeError();
const mysyntaxerror = new SyntaxError();
const myreferenceerror = new ReferenceError();
const myurierror = new URIError();
const myrangeerror = new RangeError();
const myevalerror = new EvalError();

const myregexp = /test/;

const mypromise = new Promise(((res, rej) => {}));

const mygeneratorfunction = function* () {
  yield 1;
  yield 2;
  yield 3;
};

const mygenerator = mygeneratorfunction();

const myglobalobj = {
  one: 'two',
  two: 'three'
};

const myglobalfunction = () => {
  console.log('my global function');
}

const myglobalvar = 'my global var';

(function() {
  global.myglobalvar = myglobalvar;
  global.myglobalobj = myglobalobj;
  global.myglobalfunction = myglobalfunction;
})();

const mylocalvar = 'my local var';

assert(isArray(myarray), 'myarray should be an instance of Array');

assert(isObject(myobject), 'myobject should be an instance of Object');

assert(isFunction(myfunction), 'myfunction should be an instance of Function');

assert(isDate(mydate), 'mydate should be an instance of Date');

assert(isMap(mymap), 'mymap should be an instance of Map');
assert(isWeakMap(myweakmap), 'mymap should be an instance of WeakMap');

assert(isSet(myset), 'myset should be an instance of Set');
assert(isWeakSet(myweakset), 'myweakset should be an instance of WeakSet');

assert(isString(mystring), 'mystring should be an instance of String');

assert(isNumber(mynumber), 'mynumber should be an instance of Number');
assert(!isNumber(mynumberstring), 'mynumberstring should not be an instance of Number');

assert(isBoolean(myboolean), 'myboolean should be an instance of Boolean');

assert(isError(myerror), 'myerror should be an instance of or descend Error');
assert(isError(mytypeerror), 'mytypeerror should be an instance of or descend Error');
assert(isError(mysyntaxerror), 'mysyntaxerror should be an instance of or descend Error');
assert(isError(myreferenceerror), 'myreferenceerror should be an instance of or descend Error');
assert(isError(myurierror), 'myurierror should be an instance of or descend Error');
assert(isError(myrangeerror), 'myrangeerror should be an instance of or descend Error');
assert(isError(myevalerror), 'myevalerror should be an instance of or descend Error');

assert(isRegExp(myregexp), 'myregexp should be an instance of RegExp');

assert(isPromise(mypromise), 'mypromise should be an instance of Promise');

assert(isIterator(mygenerator), 'mygenerator should follow the iterator protocol');
assert(isIterable(mygenerator), 'mygenerator should implement the Iterable interface');

assert(isGeneratorFn(mygeneratorfunction), 'mygeneratorfunction should be an instance of GeneratorFunction');
assert(isGenerator(mygenerator), 'mygenerator should be an instance of Generator');

assert(isOdd(myoddnum), 'myoddnum should be an odd integer');
assert(isOdd(myoddnumtwo), 'myoddnumtwo should be an odd integer');
assert(!isOdd(NaN), 'NaN should return false');
assert(!isOdd(Infinity), 'Infinity should return false');

assert(isEven(myevennum), 'myevennum should be an even integer');
assert(isEven(myevennumtwo), 'myevennumtwo should be an even integer');
assert(!isEven(NaN), 'NaN should return false');
assert(!isEven(Infinity), 'Infinity should return false');

assert(isUndefined(undefined), 'undefined should be undefined');

assert(isNull(null), 'null should be null');

assert(isPrimitive(null), 'null should be primitive');
assert(isPrimitive(undefined), 'undefined should be primitive');
assert(isPrimitive(mynumber), 'mynumber should be primitive');
assert(isPrimitive(mystring), 'mystring should be primitive');
assert(isPrimitive(myboolean), 'myboolean should be primitive');
assert(isPrimitive(mysymbol), 'mysymbol should be primitive');

assert(isPositive(10), '10 should be a positive number');
assert(isPositive(0), '0 should be a positive number');

assert(isNegative(-10), '-10 should be a negative number');
assert(isNegative(-0), '-0 should be a negative number');

assert(isGlobalVal(myglobalobj), 'myglobalvar should be global');
assert(isGlobalVal(myglobalvar), 'myglobalvar should be global');
assert(isGlobalVal(myglobalfunction), 'myglobalvar should be global');
assert(!isGlobalVal(mylocalvar), 'mylocalvar should not be global');
