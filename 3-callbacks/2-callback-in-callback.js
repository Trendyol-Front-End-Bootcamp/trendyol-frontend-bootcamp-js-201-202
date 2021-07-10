function getUserComments(userId, callback) {
  setTimeout(() => {
    callback([
      { id: 1, content: "hello world!" },
      { id: 2, content: "hello bootcamp!" },
    ]);
  }, 1500);
}

function getUser(callback) {
  setTimeout(() => {
    callback({ id: 1, name: "engin" });
  }, 1000);
}

getUser((user) => {
  getUserComments(user.id, (comments) => {
    console.log(comments);
  });
});
