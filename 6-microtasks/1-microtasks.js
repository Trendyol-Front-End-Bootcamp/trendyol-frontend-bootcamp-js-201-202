let promise = Promise.resolve();

setTimeout(() => {
  console.log("I am finished first?");
}, 0);

promise.then(() => console.log("promise done!"));

setTimeout(() => {
  console.log("I am finished last");
}, 0);

console.log("hello bootcamp 1");
console.log("hello bootcamp 2");
console.log("hello bootcamp 3");
console.log("hello bootcamp 4");
console.log("hello bootcamp 5");

// setTimeout(() => {
//   console.log("Middle log");
// }, 0);

console.log("hello bootcamp 6");
console.log("hello bootcamp 7");
console.log("hello bootcamp 8");
console.log("hello bootcamp 9");
console.log("hello bootcamp 10");

for (let i = 0; i < 1000000000; i++) {
  const x = Math.random();
}
