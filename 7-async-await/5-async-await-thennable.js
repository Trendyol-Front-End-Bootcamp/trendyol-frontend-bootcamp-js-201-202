class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    console.log(resolve, reject);
    // test reject
    // reject(new Error("Something happened"));

    // resolve with this.num*2 after 1000ms
    setTimeout(() => resolve(this.num * 2), 1000); // (*)
  }
}

async function f() {
  // waits for 1 second, then result becomes 2
  try {
    let result = await new Thenable(1);
    console.log(result);
  } catch (error) {
    console.log(error.name, error.message);
  }
}

f();
