// /*
//     document.write(5+5);
//     console.log(5+6); 
// */

// // o'zgaruvchilar

// // var a = 5;
// // var b = 6;

// // var ism = "Ahmadjon";
// // var city = "Tashkent";

// // var age = 23;
// // var phone = null;
// // var isMarried = true;

// // curly brace
// // key value
// var user = {
//     name: "Ahmadjon",
//     age: 45,
//     isMarried: false,
//     city: "Tashkent",
//     children: ["A", "B", "C"],
// }
// var yosh = 'age'

// // console.log(user[yosh]);

// var nums = [1,2,3,4,5,6,7,8,9,10];
// var cases = ['a','b','c','d','e','f','g','h','i','j'];
// var mix = [true, {name: "Akhmadjon"}, 'salom', 'qizil', 'yashil', 'qizil', 'yashil', 'salom', true, false, 2,2.5,5,8,9,10];

// // console.log(mix[9]);

// function print(){
//     console.log('Hello olam');
//     return 'Hello World';
// }

// var text = print();

// console.log(text)

// function add(a,b){
//     return a+b;
// }

// var result = add(5,6);

// console.log(result)


// var phone = undefined

// if(phone){
//     console.log('true')
// }else{
//     console.log('false')
// }


// var login = prompt('login kiriting');

// if(login === 'admin'){

//     var parol = prompt('parol kiriting');

//     if(parol === '123'){
//         alert('Hello admin')
//     }else{
//         alert('parol not correct')
//     }
// }else {

//     alert('login is wrong')

// }


// var number = prompt('number kiriting');

// if(number > 0 && number < 0 ){
//     alert('plus')
// }else{
//     alert('minus')
// }

// if (number % 2 == 0){

//     alert('juft')
    
// } else {

//     alert('toq')
    
// }








// function getDay() {
//     var day = prompt('Enter day');
//     switch(day){
//         case 'Monday':
//             return('Hello, it is Monday');
//         case 'Tuesday':
//             return('Hello, it is Tuesday');
//         default:
//             return('Hello, please don\'t smoke');
//     }
// }

// var result = getDay();
// alert(result);


// if(user === 'admin'){
//     alert('Hello admin');
// }else if(user === 'user'){
//     alert('Hello user');
// }else{
//     alert('Hello guest');
// }



// var limit  = +prompt('limit kiriting');


// for(var i = 1; i <= limit; i++){
//     console.log(i);
// }







// for (var i = 1; i <= limit; i++) {
    //     console.log(i, ' is number');
    // }
    
    
    // var i = 1;
    
// // while (i < limit){
    // //     console.log(i, ' is number');
    // //     i++;
    // // }
    
    // do {
        //     console.log(i, ' is number');
        //     i++;
        // }while(i > limit);
       
            
            
// var limit = +prompt('limit kiriting');





// var colors = ['red', 'green', 'blue', 'yellow', 'black', 'white'];

// for(var i = 0; i < colors.length; i++){
//     console.log('this color is ',colors[i])
// };

// var i = 0;


// while(i < colors.length){
//     console.log(colors[i])
//     i++
// }

// do{
//     console.log(colors[i]);
//     i++;
// }while(i < colors.length)


// for (var i in colors){
//     console.log(i);
// }

// for(var color of colors){
//     console.log(color)
// }


// var el = ['salom', '', false, 3, 33, undefined]



// var user = {
//     name: "Akhmadjon",
//     age: 23,
//     phone: 995578799,
//     isMarried: false,
//     job: 'programmer'
// }




// // for (var i in user){
// //     console.log(user[i]);
// // }


// function sum(){
//     return "Hello World";
// }

// var result = sum();

// console.log(result);




// function findBigger(a,b){
//     if(a>b){
//         return a;
//     }else{
//         return b;
//     }
// }

// var result = findBigger( +prompt('enter first number'), +prompt('enter second number') );   

// console.log(result)




// function findOddAndEven(limit){
//     for (var i = 0; i < limit; i++){
//         if(i % 2 == 0){
//             console.log(i, ' is even');
//         }else{
//             console.log(i, ' is odd');
//         }
//     }
// }


// // var chegara = +prompt('enter limit');

// findOddAndEven(80);


// function checkSpeed(speed){
//     var point = 0;
//     if(speed > 70){
//         point = (speed - 70) / 5;
//         return Math.floor(point);
//     }else{
//         return 'ok';
//     }
// }


// var result = checkSpeed(+prompt('enter speed'));

// console.log(result)




var nums = ['Akhmadjon',2,3,4,5,6,7,8,9,10];
var nums2 = ['Akhmadjon',2,3,4,5,6,7,false,9,10];

// for(var i=0; i < arr.length; i++){
//     console.log(arr[i])
// }

function printArray(arr){
    return arr
}


// printArray(nums)
var a = printArray(['salom', 3,3,54,5,67,7,87,78, [43099340950,43,5334], {name: 'ali', age: 33}, false, true]);











console.log(a)