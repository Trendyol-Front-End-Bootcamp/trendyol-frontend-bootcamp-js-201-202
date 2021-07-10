function func() {
  try {
    return 1;
  } catch (err) {
    /* ... */
  } finally {
    console.log("finally");
  }
}

console.log(func()); // first works console.log from finally, and then this one
