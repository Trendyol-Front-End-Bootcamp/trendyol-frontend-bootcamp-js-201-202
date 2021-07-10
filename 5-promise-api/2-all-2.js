const fetch = require("node-fetch");
let urls = [
  "https://api.github.com/users/enginustun",
  "https://api.github.com/users/remy",
  "https://api.github.com/users/jeresig",
];

// map every url to the promise of the fetch
let requests = urls.map((url) => fetch(url));

// Promise.all waits until all jobs are resolved
Promise.all(requests).then((responses) =>
  responses.forEach((response) =>
    console.log(`${response.url}: ${response.status}`)
  )
);
