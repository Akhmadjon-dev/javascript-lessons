"use strict";

// with var
var input = "   Javascript    ";
var output = "<div>".concat(input, "</div>"); // with function

var trim = function trim(str) {
  return str.trim();
};

var toLowerCase = function toLowerCase(str) {
  return str.toLowerCase();
};

var wrapInDiv = function wrapInDiv(str) {
  return "<div>".concat(str, "</div>");
};

var wrap = function wrap(type) {
  return function (str) {
    return "<".concat(type, ">").concat(str, "</").concat(type, ">");
  };
};

function add(a, b) {
  return a + b;
}

function add2(a) {
  return function (b) {
    return a + b;
  };
}

var user = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA'
  }
};

var add3 = function add3(a) {
  return function (b) {
    return a + b;
  };
}; // console.log(add3(1)(2), add2(1)(2));
// const getResult = _.flowRight(wrapInDiv, toLowerCase, trim);


var getResult = _.flow(trim, toLowerCase, wrap('div')); // console.log(getResult(input));


var student = Immutable.Map({
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA'
  }
});
var myStudent = student.set('name', 'Jane'); // restrictions:
// gambiling;
// cazino;
// women clothes;
// alcahol;
// In the integer array A [1: n], find the number repeating the maximum number of times. If there are several such numbers, then one of them.
// var listNumbers = [8, 2,  5, 4, 7, 2, 5, 8, 1, 3, 4, 7, 8];
// setState state async 
// createElement 
// optimiztion
// indentifying the problem in the code
// senior tasks
//  1. estimation ways 
//  2. branch strategies 
//  3. development types of ways