let json = '{"name":"Engin", "age": 30}'; // data from the server

let user = JSON.parse(json); // convert the text representation to JS object

// now user is an object with properties from the string
console.log(user.name); // Engin
console.log(user.age); // 30
