// no name in data
let json = '{ "age": 30 }'; // incomplete data

try {
  let user = JSON.parse(json); // <-- no errors
  console.log(user.name); // no name!
} catch (err) {
  console.log("doesn't execute");
}
