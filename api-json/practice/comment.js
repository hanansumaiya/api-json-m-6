const loadComments = () => {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => displayComment(data));
};
const displayComment = (comments) => {
  const commentsDiv = document.getElementById("comments");
  comments.forEach((comment) => {
    console.log(comment);
    const div = document.createElement("div");
    div.classList.add("comment");
    div.innerHTML = `
    <h3>${comment.id}</h3>
    <h5>${comment.name}</h5>
    <h5>${comment.email}</h5>
    <p>${comment.body}</p>
    `;
    commentsDiv.appendChild(div);
  });
};
