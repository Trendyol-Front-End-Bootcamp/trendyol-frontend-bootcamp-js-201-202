function readData() {
  let json = '{ "age": 30 }';

  try {
    // ...
    blabla(); // error!
  } catch (err) {
    // ...
    if (!(err instanceof SyntaxError)) {
      throw err; // rethrow (don't know how to deal with it)
    }
  } finally {
    console.log("Finally");
  }
}

try {
  readData();
} catch (err) {
  console.log("External catch got: " + err); // caught it!
}
