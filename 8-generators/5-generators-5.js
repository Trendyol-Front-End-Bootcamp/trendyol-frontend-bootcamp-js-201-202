var standard_input = process.stdin;

function* gen() {
  // Pass a question to the outer code and wait for an answer
  let result = yield "2 + 2 = ?";
  while (true) {
    console.log({ result });
    if (result === 4) {
      return "Helal olsun!";
    } else {
      result = yield "Patladin";
    }
  }
}

let generator = gen();

let question = generator.next().value; // <-- yield returns the value
console.log(question);

standard_input.on("data", function (data) {
  // User input exit.
  if (data === "exit\n") {
    process.exit();
  } else {
    let result = generator.next(+data); // --> pass the result into the generator
    console.log(result);
    if (result.value === "Helal olsun!") {
      process.exit();
    }
  }
});
