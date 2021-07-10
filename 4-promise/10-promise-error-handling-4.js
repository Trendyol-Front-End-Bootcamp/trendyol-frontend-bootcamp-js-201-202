// FOR BROWSER

window.addEventListener("unhandledrejection", function (event) {
  // the event object has two special properties:
  alert(event.promise); // [object Promise] - the promise that generated the error
  alert(event.reason); // Error: Whoops! - the unhandled error object
});

new Promise(function () {
  throw new Error("Whoops!");
}); // no catch to handle the error
