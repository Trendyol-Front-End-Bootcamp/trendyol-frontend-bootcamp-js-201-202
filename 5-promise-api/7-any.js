// chromeda test et

Promise.any([
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Whoops!")), 1000)
  ),
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).then(console.log); // 1


// tamami error gelirse reject oluyor AggregateError ile
Promise.any([
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Whoops!")), 1000)
  ),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Whoops2!")), 2000)
  ),
]).catch((err) => {
  console.log(err.errors);
  console.log(err);
});
