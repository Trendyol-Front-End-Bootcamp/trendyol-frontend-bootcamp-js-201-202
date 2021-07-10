const fetch = require("node-fetch");

let urls = [
  "https://api.github.com/users/iliakan",
  "https://api.github.com/users/remy",
  "https://no-such-url",
];

Promise.allSettled(urls.map((url) => fetch(url))).then((results) => {
  // (*)
  results.forEach((result, num) => {
    if (result.status == "fulfilled") {
      console.log(`SUCCESS: ${urls[num]}: ${result.value.status}`);
    }
    if (result.status == "rejected") {
      console.log(`ERROR: ${urls[num]}: ${result.reason}`);
    }
  });
});


// needs polyfill for old browsers
// if (!Promise.allSettled) {
//   const rejectHandler = reason => ({ status: 'rejected', reason });

//   const resolveHandler = value => ({ status: 'fulfilled', value });

//   Promise.allSettled = function (promises) {
//     const convertedPromises = promises.map(p => Promise.resolve(p).then(resolveHandler, rejectHandler));
//     return Promise.all(convertedPromises);
//   };
// }