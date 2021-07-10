function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}

let it = generateSequence();

let one = it.next();

console.log(one, it.next(), it.next(), it.next()); // {value: 1, done: false}

// for (const value of generateSequence()) {
//   console.log(value);
// }
