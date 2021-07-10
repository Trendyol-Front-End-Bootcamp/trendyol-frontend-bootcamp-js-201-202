new Promise((resolve, reject) => {
  resolve("ok");
})
  .then((result) => {
    throw new Error("Whoops!"); // rejects the promise
  })
  .catch(console.log); // Error: Whoops!

new Promise((resolve, reject) => {
  resolve("ok");
})
  .then((result) => {
    blabla(); // no such function
  })
  .catch(console.log); // ReferenceError: blabla is not defined
