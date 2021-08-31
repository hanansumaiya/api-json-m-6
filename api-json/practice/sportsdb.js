const loadSportsDb = () => {
  fetch("https://www.thesportsdb.com/api/v1/json/1/all_leagues.php")
    .then((res) => res.json())
    .then((data) => displaySportsLeague(data.leagues));
};
loadSportsDb();
const displaySportsLeague = (sportsLeagues) => {
  console.log(sportsLeagues);
  const sectionleagues = document.getElementById("leagues");
  sportsLeagues.forEach((league) => {
    const div = document.createElement("div");
    div.classList.add("league");
    div.innerHTML = `
    <h5>${league.idLeague}</h5>
    <p>Leage Name: ${league.strLeague}</p>
    <p>Sport: ${league.strSport}</p>
    <button onclick="loadDetails(${league.idLeague})" class="btn btn-outline-secondary">Details</button>
    `;
    sectionleagues.appendChild(div);
  });
};
const loadDetails = (leagueId) => {
  console.log(leagueId);
  const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`;
  //   console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayDetails(data.leagues[0]));
};
const displayDetails = (details) => {
  //   console.log(details.strCountry);
  const leagueDetails = document.getElementById("league-details");
  leagueDetails.textContent = "";
  const div = document.createElement("div");
  div.classList.add("league");
  div.innerHTML = `
  <p>Leage Name: ${details.strLeague}</p>
  <p>Sport: ${details.strSport}</p>
  <p>Country :${details.strCountry}</p>
  <h5>LOGO</h5>
  <img width="300px" src="${details.strLogo}" alt="">
  <p>Description: ${details.strDescriptionEN.slice(0, 200)}</p>
  <h5>POSTER</h5>
  <img width="300px" src="${details.strPoster}" alt="">
  
  `;
  leagueDetails.appendChild(div);
};
// strLogo
// strYoutube
// strDescriptionEN
// idCup
