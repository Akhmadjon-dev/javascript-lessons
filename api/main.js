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




class Person {
    static hello() {
        console.log('hello')
    }
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    print() {
        console.log(this.name, this.age);
    }
}

class LocalStore{
    static get(key) {
        return localStorage.getItem(key);
    }
    static set(key, value) {
        localStorage.setItem(key, value);
    }
}

LocalStore.set('name', 'John');

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    getGrade() {
        return this.grade;
    }
}        

let user = new Person('Leanne Graham', 44);
// // User.prototype
// user.__proto__.filter = function () {
//     return this.age > 18;
// }

let student = new Student('Jhon Graham', 24, 'A');
console.log(user.getGrade());
console.log(student.getName());

// let user = {
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
