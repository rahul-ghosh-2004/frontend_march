// console.log("Hello");

// let num = 10
// console.log(num);
// num = 20
// console.log(num);

// const number = 10
// console.log(number);
// let & const

// let s1 = "Hello"  // Operand1
// let s2 = "World!" // operand2
// console.log(s1 + " " + s2);


// let arr = [ " groot", "iron man", "cap america", "thor", "Bruce Banner", "Loki" ]
// console.log(arr);
//arr.push("ant man")   // push a value to the length position
// console.log(arr.pop())

// arr.push()
// New elements to add to the array.
// Appends new elements to the end of an array, and returns the new length of the array.

// arr.pop()
// Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

// console.log(arr.length)
// arr.unshift()
// Elements to insert at the start of the array.
// Inserts new elements at the start of an array, and returns the new length of the array.
// arr.shift()
// arr.shift()
// Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// console.log(arr);




//Spread operator
// const marks1 = [ 90, 98, 51, 44, 78 ]
// SI ---> 0
// EI ---> length - 1
// length ---> marks1.length

// console.log(marks1[marks1.length - 1]);



// const marks2 = [ 71, 66, 99 ]
// const finalMarks = [ ...marks1, ...marks2 ]
// spread operator ---> ...

// console.log(finalMarks);

// ()  --> parenthesis
// {}  --> Braces
// []  --> Brackets

const data = {
    "username": "admin",   // key value pair , key --> username, value --> admin
    "password": "******",
    "my name": "hello"
}
// console.log(data["my name"]);
// console.log(data["username"]);
// console.log(data["password"]);
// console.log(data.username);
// console.log(data.password);


const localInfo = {
    "originalName": "javascript",
    "country": "INDIA"
}
const new_var = { ...data, ...localInfo }
// console.log(new_var);