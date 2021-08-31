function loadComments() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => displayComments(data));
}
loadComments();
function displayComments(data) {
  const section = document.getElementById("comments");
  for (const detail of data) {
    const div = document.createElement("div");
    div.classList.add("comment");
    div.innerHTML = `<h3>Id: ${detail.id}, Name: ${detail.name}</h3>
    <h4>Email: ${detail.email}</h4>
    <p>Body: ${detail.body}</p>`;
    section.appendChild(div);
  }
}
