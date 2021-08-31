const searchTeam = () => {
  const inputSearch = document.getElementById("input-search");
  const inputSearchText = inputSearch.value;
  inputSearch.value = "";
  const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${inputSearchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTeams(data.teams));
};
const displayTeams = (teams) => {
  const showTeams = document.getElementById("show-teams");
  showTeams.textContent = "";
  teams.forEach((team) => {
    console.log(team.strCountry);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
    <div class="card h-100">
    <h5 class="card-title">Badge</h5>
    <img src="${team.strTeamBadge}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">ID: ${team.idTeam}</h5>
      <h5 class="card-title">Name: ${team.strTeam}</h5>
      <h5 class="card-title">Country: ${team.strCountry}</h5>
      <h5 class="card-title">League: ${team.strLeague}</h5>
      <h5 class="card-title">sport: ${team.strSport}</h5>
      <p class="card-text"></p>
    </div>
  </div>
    `;
    showTeams.appendChild(div);
  });
};
