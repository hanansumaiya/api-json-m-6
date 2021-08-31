const shop = {
  name: "shapla store",
  address: "kamarpara",
  profit: 10000,
  product: {
    name: "iceqream",
    price: 100,
    category: {
      c1: "chocolet",
      c2: "vanilla",
    },
  },
};
const shopStringified = JSON.stringify(shop);
const shopstore = JSON.parse(shopStringified);
console.log(shop);
console.log(shopStringified);
console.log(shopstore);
//////////////////////////////

function loaddata() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
}
function loadUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => getUsers(data));
}
function getUsers(data) {
  const ul = document.getElementById("users");
  for (const user of data) {
    const li = document.createElement("li");
    li.innerText = `
      name:${user.name} ,, email:${user.email}
    `;
    ul.appendChild(li);
  }
}
//////////////////////////
function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => displayPosts(data));
}
loadPosts();
function displayPosts(posts) {
  const section = document.getElementById("posts");
  for (const post of posts) {
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.body}</p>
    `;
    section.appendChild(div);
  }
}
