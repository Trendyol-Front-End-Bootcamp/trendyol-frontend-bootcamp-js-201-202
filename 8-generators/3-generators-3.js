function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}

let sequence = [0, ...generateSequence()];

console.log(sequence); // 0, 1, 2, 3

function* getComments() {
  const user = yield fetch("/users/2");
  const comments = yield fetch(`/comments/${user.id}`);
  dispatch({ type: "comments_updated", comments });
}
