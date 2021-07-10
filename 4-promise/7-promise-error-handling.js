new Promise((resolve, reject) => {
  throw new Error("Whoops!");
}).catch(console.log); // Error: Whoops!

new Promise((resolve, reject) => {
  reject(new Error("Whoops!"));
}).catch(console.log); // Error: Whoops!

// fetch("https://no-such-server.blabla") // rejects
//   .then((response) => response.json())
//   .catch((err) => alert(err));
