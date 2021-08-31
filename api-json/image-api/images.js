function loadPhotos() {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((data) => displayPhotos(data));
}
loadPhotos();
function displayPhotos(photos) {
  const images = document.getElementById("images");
  for (const photo of photos) {
    const div = document.createElement("div");
    div.innerHTML = `
    <img src="${photo.thumbnailUrl}" alt="">
    `;
    images.appendChild(div);
  }
}
