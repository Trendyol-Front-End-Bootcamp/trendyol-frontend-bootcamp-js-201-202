try {
  setTimeout(function () {
    noSuchVariable; // script will die here
    console.log("hello bootcamp");
  }, 1000);
} catch (err) {
  console.log("won't work");
}
