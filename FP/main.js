
// with var
const input = "   Javascript    ";
const output = `<div>${input}</div>`;


// with function
const trim = (str) => str.trim();
const toLowerCase = (str) => str.toLowerCase();
const wrapInDiv = (str) => `<div>${str}</div>`;
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;

function add(a,b) {
  return a + b;
}
function add2(a) {
  return function(b) {
    return a + b;
  }
}

let user = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    }
};

const add3 = (a) => (b) => a + b;

// console.log(add3(1)(2), add2(1)(2));

// const getResult = _.flowRight(wrapInDiv, toLowerCase, trim);
const getResult = _.flow(trim, toLowerCase, wrap('div'));

// console.log(getResult(input));


const student = Immutable.Map({
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    }
});
let myStudent = student.set('name', 'Jane');



// restrictions:

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



