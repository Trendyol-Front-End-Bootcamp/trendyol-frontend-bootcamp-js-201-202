let json = '{ "age": 30 }'; // incomplete data
try {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new SyntaxError("Incomplete data: no name");
  }

  blabla(); // unexpected error

  console.log(user.name);
} catch (err) {
  if (err instanceof SyntaxError) {
    console.log("JSON Error: " + err.message);
  } else {
    throw err; // rethrow (*)
  }
}
