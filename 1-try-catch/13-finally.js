const [, , err, ...args] = process.argv;

try {
  console.log("try");
  if (err === "-e") {
    BAD_CODE();
  }
} catch (err) {
  console.log("catch", err.name, err.message);
} finally {
  console.log("finally");
}
