const loadCountry = () => {
  fetch("https://restcountries.eu/rest/v2/all")
    .then((res) => res.json())
    .then((data) => displayCountry(data));
};
loadCountry();
const displayCountry = (countries) => {
  const sectionCountries = document.getElementById("countries");
  countries.forEach((country) => {
    const countryDiv = document.createElement("div");
    countryDiv.classList.add("country");
    countryDiv.innerHTML = `
    <h2>Country Name : ${country.name}</h2>
    <p>Capital: ${country.capital}</p>
    <button onclick="loadCountryDetails('${country.name}')">Details</button>
    `;
    sectionCountries.appendChild(countryDiv);
  });
};
const loadCountryDetails = (name) => {
  const url = `https://restcountries.eu/rest/v2/name/${name}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountryDeails(data[0]));
};
const displayCountryDeails = (country) => {
  const countryDetails = document.getElementById("country-details");
  countryDetails.innerHTML = `
  <h2>${country.name}</h2>
  <p>Currencie: ${country.currencies[0].name}</p>
  <p>Languages: ${country.languages[0].name} ,NativeName:  ${country.languages[0].nativeName}</p>
  <p></p>
  <img width="200px" src='${country.flag}'>
  `;
};
