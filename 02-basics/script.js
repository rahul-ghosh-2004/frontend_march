// const data = {
//     "username": "user123",
//     "password": "1234",
//     "location": "INDIA",
//     "city": "Mumbai"
// }

// let { username, password, location, city } = data

// syntax -,
// let/const {} = object_name

// console.log(username);
// console.log(password);
// console.log(location);
// console.log(city);

// console.log(data.username);
// console.log(data.password);
// console.log(data.location);
// console.log(data.city);



// const student = {
//     "name": "Pankaj",
//     "stream": "CSE",
//     "degree": "BTech",
//     "location": "INDIA",
//     "state": "Delhi",
//     "pincode": 445566,
//     "isLoggedIn": {
//         "collegePortal": false,
//         "universityPortal": true
//     }
// }

// const { 
//     name,
//     degree,
//     stream,
//     location,
//     pincode
// } = student

// console.log(`${name} ${degree} ${stream} ${location} ${pincode}`);




// const makeupItems = {
//     "lipstick": true,
//     "eyeliner": true,
//     "compact": true,
//     "primar": true,
//     "fooditems": {
//         "biriyani": true,
//         "burger": true,
//         "cold_drinks": {
//             "pepsi": true,
//             "cocacola": true
//         }
//     }
// }

// let {
//     lipstick,
//     eyeliner,
//     compact,
//     primar,
//     fooditems
// } = makeupItems

// console.log(lipstick);
// console.log(eyeliner);
// console.log(compact);
// console.log(primar);
// console.log(fooditems);



// fetch API

// network call
// fetch ---> Internet

// 1. We will perform a network call (inside the fetch API)
// 2. if success, execute the then block and ignore the catch.
// 3. if failure, then will be ignored and catch will be executed.
// then & catch block will take an argument in the form of function.
// from the fetch API, you will receive the data in the form of text(string)


// fetch("")
// .then()
// .catch()

// now we have to convert the data into json format.
// javascript object notation.
// json is the advance form of JS object.

fetch("https://randomuser.me//api")  // network call
.then((xyz) => {  // i will receive some data in the form of xyz
    // console.log("Network call successfully completed!");
    return xyz.json()
})
.then((value) => {
    console.log(typeof value);
})
.catch(() => {
    console.log("Network call failed!");
})

// console.log("object");


// const data = {}

// data.password