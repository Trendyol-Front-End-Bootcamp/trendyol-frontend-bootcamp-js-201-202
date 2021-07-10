async function f() {
  return Promise.resolve(1);
}

f().then(console.log); // 1
