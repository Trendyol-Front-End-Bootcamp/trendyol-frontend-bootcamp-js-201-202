const logAfterSomeTime = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Zamani geldiginde calisacagim");
    }, ms);
  });
};

logAfterSomeTime(2000).then((message) => console.log(message));

console.log("Ben aninda calisacagim");
