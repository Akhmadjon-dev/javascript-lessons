"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var methods = {
  fdOne: function fdOne(el) {
    return document.querySelector(el);
  },
  fdAll: function fdAll(el) {
    return document.querySelectorAll(el);
  }
};
var fdOne = methods.fdOne,
    fdAll = methods.fdAll;
var btn = fdOne("#btn");
var list = fdAll('.list');
var time = fdOne('#context');
btn.addEventListener("click", sayHello);

function sayHello(e) {
  var data = [];
  e.preventDefault();
  var firstName = fdOne('#name').value;
  var age = fdOne('#age').value;

  function User(name, age) {
    this.name = name;
    this.age = age;
  }

  data.push(new User(firstName, age));
  var oldStore = JSON.parse(window.localStorage.getItem('users'));
  var result;

  if (oldStore) {
    result = JSON.stringify([].concat(_toConsumableArray(oldStore), data));
  } else {
    result = JSON.stringify(data);
  }

  window.localStorage.setItem('users', result);
}

var get = fdOne('#get');
get.addEventListener('click', getUser);

function getUser() {
  var user = window.localStorage.getItem('users');
  var userObj = JSON.parse(user);
  list[0].innerHTML = userObj[0].name;
  list[1].innerHTML = userObj[0].age;
}

function getTime() {
  time.innerHTML = new Date().toLocaleTimeString();
}

var stopTime = setInterval(getTime, 1000);
setTimeout(function () {
  clearInterval(stopTime);
}, 5000);