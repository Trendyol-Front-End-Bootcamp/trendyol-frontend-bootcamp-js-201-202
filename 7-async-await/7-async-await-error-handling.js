const fetch = require("node-fetch");

async function f() {
  try {
    let response = await fetch("/no-user-here");
    let user = await response.json();
  } catch (err) {
    // catches errors both in fetch and response.json
    console.log(err);
  }
}

f();

// // top-level caselerinde
// async function f2() {
//   let response = await fetch("/no-user-here");
// }
// // f2() becomes a rejected promise
// f2().catch(console.log); // TypeError: failed to fetch // (*)
