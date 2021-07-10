function getCommentsWithUpvote(comments, callback) {
  setTimeout(() => {
    callback(
      comments.map((comment) => ({
        ...comment,
        upvotes: Math.floor(Math.random() * 100),
      }))
    );
  }, 1500);
}

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
    getCommentsWithUpvote(comments, (commentsWithUpvote) => {
      console.log(commentsWithUpvote);
    });
  });
});
