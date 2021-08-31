const loadQuote = () => {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => displayQuotes(data));
};
loadQuote();
const displayQuotes = (data) => {
  const div = document.getElementById("quote");
  div.innerHTML = `<h2>${data.quote}</h2>`;
};
