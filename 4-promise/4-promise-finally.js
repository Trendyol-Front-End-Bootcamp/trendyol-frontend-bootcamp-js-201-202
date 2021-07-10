function getUserComments(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, content: "hello world!" },
        { id: 2, content: "hello bootcamp!" },
      ]);
    }, 1500);
  });
}

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: "engin" });
    }, 1000);
  });
}

function setLoading(isLoading) {
  if (isLoading) {
    console.log("comments are loading...");
  } else {
    console.log("comments are loaded");
  }
}

setLoading(true);
getUser(1).then((user) => {
  getUserComments(user.id)
    .then((comments) => {
      console.log(comments);
    })
    .catch(() => {})
    .finally(() => setLoading(false));
});
