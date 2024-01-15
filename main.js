let cardMainDiv = document.querySelector(".card-main-div");
let searchBtn = document.querySelector("button");
let closeBtn = document.querySelector(".fa-xmark");

searchBtn.addEventListener("click", function () {
  cardMainDiv.style.scale = "100%";
  setTimeout(() => {
    cardMainDiv.style.scale = "98%";
    cardMainDiv.style.transition = "0.01s";
  }, 600);
  setTimeout(() => {
    cardMainDiv.style.scale = "100%";
  }, 1200);
});

closeBtn.addEventListener("click", function () {
  cardMainDiv.style.scale = "0%";
});
