"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// let user = {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   }
// let promises = fetch('https://jsonplaceholder.typicode.com/users', {
//     method: 'POST',
//     body: JSON.stringify(user),
//     // headers: {
//     //     'Content-Type': 'application/json',
//     //     'Authentication': 'Barer token',
//     // }
// }).then((res) => {
//     return res.json();
// }).then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err, 'errro');
// }).finally(() => {
//     console.log('finally');
// });
// let promise = fetch('https://jsonplaceholder.typicode.com/todos').then((res) => res.json()).then(res => {
//     let todos = getUsersTodo(res, 1)
//     console.log(todos)
// }).catch(err => {
//     console.log(err, 'error');
// }).finally(() => {
//     console.log('finally');
// });
// let promise = fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()).then(res => {
//     let output = document.getElementById('output');
//         for (let user of res){
//             let tr = `
//                 <td scope="col">#</td>
//                 <td scope="col">${user.name}</td>
//                 <td scope="col">${user.website}</td>
//                 <td scope="col">${user.phone}</td>
//                 <td scope="col">${user.address.city}</td>
//                 <td scope="col">${user.email}</td>
//             `
//             output.innerHTML += tr;
//         }
// }).catch(err => {
//     console.log(err, 'error');
// }).finally(() => {
//     console.log('finally');
// });
// async function getUsers() {
//     try {
//         let res = await fetch('https://jsonplaceholder.typicode.com/users');
//         let data = await res.json();
//         let output = document.getElementById('output');
//         for (let user of data){
//             let tr = `
//                 <td scope="col">#</td>
//                 <td scope="col">${user.name}</td>
//                 <td scope="col">${user.website}</td>
//                 <td scope="col">${user.phone}</td>
//                 <td scope="col">${user.address.city}</td>
//                 <td scope="col">${user.email}</td>
//             `
//             output.innerHTML += tr;
//         }
//     } catch (err) {
//         console.log(err);
//     }
//     console.log('finally')
// }
// getUsers()
// getUsersTodo = (todos, id) => {
//     let result = []
//     for (let todo of todos){
//         if (todo.userId === id){
//             result.push(todo)
//         }
//     }
//     return result
// }
// const user = {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     print(a,b) {
//         console.log(this.name, 'its is user name',a,b);
//     }
// }
// const student = {
//     "id": 1,
//     "name": "Jhon Graham",
//     "username": "Hely",
//     show() {
//         console.log(this.name, 'it is students name')
//     }
// }
// // user.print();
// print = user.print;
// print.call(user, 'a', 'b');
// function create(name, age) {
//     return {
//         name,
//         age
//     }
// }
// let user1 = (name, age) => ({name, age})
// import { add } from './utils.js';
// log('hello brother:)')
var Person =
/*#__PURE__*/
function () {
  _createClass(Person, null, [{
    key: "hello",
    value: function hello() {
      console.log('hello');
    }
  }]);

  function Person(name, age) {
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  _createClass(Person, [{
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "print",
    value: function print() {
      console.log(this.name, this.age);
    }
  }]);

  return Person;
}();

var LocalStore =
/*#__PURE__*/
function () {
  function LocalStore() {
    _classCallCheck(this, LocalStore);
  }

  _createClass(LocalStore, null, [{
    key: "get",
    value: function get(key) {
      return localStorage.getItem(key);
    }
  }, {
    key: "set",
    value: function set(key, value) {
      localStorage.setItem(key, value);
    }
  }]);

  return LocalStore;
}();

LocalStore.set('name', 'John');

var Student =
/*#__PURE__*/
function (_Person) {
  _inherits(Student, _Person);

  function Student(name, age, grade) {
    var _this;

    _classCallCheck(this, Student);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Student).call(this, name, age));
    _this.grade = grade;
    return _this;
  }

  _createClass(Student, [{
    key: "getGrade",
    value: function getGrade() {
      return this.grade;
    }
  }]);

  return Student;
}(Person);

var user = new Person('Leanne Graham', 44); // // User.prototype
// user.__proto__.filter = function () {
//     return this.age > 18;
// }

var student = new Student('Jhon Graham', 24, 'A');
console.log(user.getGrade());
console.log(student.getName()); // let user = {
//     name: 'Leanne Graham',
//     age: 44
// }
// console.log(user.name);
// console.log(user.age);
// let user = {
//     name: 'Leanne Graham',
//     age: 44,
//     print() {
//         console.log(this.name, 'its is user name');
//     }
// }
// user.print();
// let user = {
//     name: 'Leanne Graham',
//     age: 44,
//     print() {
//         console.log(this.name, 'its is user name');
//     }
// }
// user.print();
// let user = {
//     name: 'Leanne Graham',
//     age: 44,
//     print() {
//         console.log(this.name, 'its is user name');
//     }
// }
// user.print();
// let user = {
//     name: 'Leanne Graham',
//     age: 44,
//     print() {
//         console.log(this.name, 'its is user name');
//     }
// }
// user.print();
// let user = {
//     name: 'Leanne Graham',
//     age: 44,
//     print() {
//         console.log(this.name, 'its is user name');
//     }
// }
// user.print();
// let user = {
//     name: 'Leanne Graham',
//     age: 44,
//     print() {
//         console.log(this.name, 'its is user name');
//     }
// }