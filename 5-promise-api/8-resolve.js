const fetch = require("node-fetch");

let cache = new Map();

const getUserName = () => {
  if (cache.has("name")) {
    return Promise.resolve(cache.get("name"));
  }

  return fetch(`https://api.github.com/users/enginustun`)
    .then((res) => res.json())
    .then((user) => {
      cache.set("name", `from cache: ${user.name}`);
      return user.name;
    });
};

getUserName().then((name) => {
  console.log({ name });

  getUserName().then((name) => {
    console.log({ name });
  });
});
