let json = "{ bad json }";

try {
  let user = JSON.parse(json); // <-- when an error occurs...
  console.log(user.name); // doesn't work
} catch (err) {
  // ...the execution jumps here
  console.log(
    "Our apologies, the data has errors, we'll try to request it one more time."
  );
  console.log(err.name);
  console.log(err.message);
}
