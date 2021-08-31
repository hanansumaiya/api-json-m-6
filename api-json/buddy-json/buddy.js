const loadBuddy = () => {
  fetch("https://randomuser.me/api/?results=10")
    .then((res) => res.json())
    .then((data) => displayBuddys(data));
};
loadBuddy();
const displayBuddys = (data) => {
  const buddys = data.results;
  const section = document.getElementById("buddys");
  for (const buddy of buddys) {
    const div = document.createElement("div");
    div.classList.add("buddy");
    div.innerHTML = `<h3>Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}</h3>
    <p>Email: ${buddy.email}</p>
    <p>City: ${buddy.location.city} , State: ${buddy.location.state} , Country: ${buddy.location.country}</p>`;
    section.appendChild(div);
  }
};
// "city":"Listowel","state":"Carlow","country":"Ireland"
