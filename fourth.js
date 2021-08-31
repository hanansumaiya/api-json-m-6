function addBorder() {
  const friendS = document.getElementById("friends");
  friendS.style.border = "3px solid tomato";
}
document.getElementById("change-h3").addEventListener("click", function () {
  const h3 = document.getElementsByTagName("h3");
  for (const element of h3) {
    element.style.color = "tomato";
  }
});
document.getElementById("set-bg").addEventListener("click", function () {
  const friendS = document.getElementById("friends");
  friendS.style.backgroundColor = "lightblue";
});
document.getElementById("set-padding").addEventListener("click", function () {
  const friendS = document.getElementById("friends");
  friendS.style.padding = "20px";
});
document.getElementById("set-margin").addEventListener("click", function () {
  const friendS = document.getElementById("friends");
  friendS.style.marginBottom = "30px";
});
