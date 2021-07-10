// window.addEventListener('error', function(event) { ... })
process.on("uncaughtException", function (err) {
  console.log("Caught exception: ", err.name, err.message, err.stack);
});

setTimeout(function () {
  console.log("This will still run.");
}, 1000);

// Intentionally cause an exception, but don't catch it.
nonexistentFunc();
console.log("This will not run.");
