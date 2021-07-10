Promise.all([
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!1")), 1000)).then(
    (res) => {
      console.log(`Buna girdi: ${res}`);
      return res;
    }
  ),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Whoops!")), 2000)
  )
    .then((res) => {
      console.log(`Buna girdi: ${res}`);
      return res;
    }),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)).then(
    (res) => {
      console.log(`Buna girdi: ${res}`);
      return res;
    }
  ),
])
  .then((res) => {
    console.log("all finished");
  })
  .catch(console.log)
  .finally(() => {
    console.log("finally");
  }); // Error: Whoops!
