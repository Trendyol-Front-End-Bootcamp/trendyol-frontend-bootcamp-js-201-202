try {
  console.log("Start of try runs"); // (1) <--

  // ...no errors here

  console.log("End of try runs"); // (2) <--
} catch (err) {
  console.log("Catch is ignored, because there are no errors"); // (3)
}
