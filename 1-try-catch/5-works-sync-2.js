setTimeout(function () {
  try {
    noSuchVariable; // try...catch handles the error!
  } catch {
    console.log("error is caught here!");
  }
}, 1000);
