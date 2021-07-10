async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000);
  });

  let result = await promise; // wait until the promise resolves (*)
  console.log(result); // "done!"
}

f();



// function f() {
//   let promise = Promise.resolve(1);
//   let result = await promise; // Syntax error
// }

// await f();

// But we can wrap it into an anonymous async function, like this:
// (async () => {
//   let response = await fetch('/article/promise-chaining/user.json');
//   let user = await response.json();
//   ...
// })();
// P.S. New feature: starting from V8 engine version 8.9+, top-level await works in modules.
