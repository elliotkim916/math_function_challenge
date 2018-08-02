/*
    Function Math!
    Coding is hard. Sometimes it would just be better to write plain old
    english. Let's create some functions that let us do basic arithemtic
    using english.
    Examples:
    seven();               // -> 7
    seven(times(five()));  // -> 35
    four(plus(nine()));    // -> 13
    eight(minus(three())); // -> 5
    six(dividedBy(two())); // -> 3
*/

'use strict';

const assert = require('assert');

function makeNum (num, func) {
  if (func === undefined) {
    return num; 
  } else {
    return func(num); 
  }
}

function one (f) {
  return makeNum(1, f);
}

function two (f) {
  return makeNum(2, f);
}

function three (f) {
  return makeNum(3, f);
}

function four (f) {
  return makeNum(4, f);
}

function five (f) {
  return makeNum(5, f);
}

function six (f) {
  return makeNum(6, f);
}

function seven (f) {
  return makeNum(7, f);
}

function eight (f) {
  return makeNum(8, f);
}

function nine (f) {
  return makeNum(9, f);
}

function plus (v) {
  return function (u) {
    return v + u;
  };
}

function minus (v) {
  return function (u) {
    return u - v;
  };
}

function times (v) {
  return function (u) { 
    return v * u; 
  };
}

function divided_by (v) {
  return function (u) {
    return u / v;
  };
}

assert.equal(seven(), 7);
assert.equal(seven(times(five())), 35);
assert.equal(four(plus(nine())), 13);
assert.equal(eight(minus(three())), 5);
assert.equal(six(divided_by(two())), 3);

process.stdout.write("If this line runs, you've solved the kata!");
process.exit(0);
