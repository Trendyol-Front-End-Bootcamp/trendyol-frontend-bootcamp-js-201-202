class Waiter {
  async wait() {
    return await Promise.resolve("I am waiting");
  }
}

new Waiter().wait().then(console.log); // 1 (this is the same as (result => console.log(result)))
