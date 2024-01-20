/*********************************************************
 * ! VARIABLES SECTION STARTED
 ********************************************************** */

let cardMainDiv = document.querySelector(".card-main-div");
let searchBtn = document.querySelector("button");
let closeBtn = document.querySelector(".fa-xmark");

let idInput = document.querySelector("#idNumber");
let issuedDataInput = document.querySelector("#issuedData");
let form = document.querySelector("form");

/*********************************************************
 * ! VARIABLES SECTION ENDED
 ********************************************************** */

/**********************************************************
 * ! DATA FETCHING LOGIC STARTED
 ********************************************************* */

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let DataFetchingURL = `
    https://script.google.com/macros/s/AKfycbxuAw8-mrZUuskDuSKC6Q0yb2L8ezSffIH6HgIOGfdClMJZSwKnyFY5-HldkePsjUy6ZQ/exec`;

  fetch(`${DataFetchingURL}?ID=${encodeURIComponent(idInput.value)}`)
    .then((res) => {
      return res.json();
    })
    .then((finalRes) => {
      console.log(finalRes.data[0].Name);
    })
    .catch((error) => {
      console.log(error);
    });
});

/*********************************************************
 * ! DATA FETCHING LOGIC ENDED
 ********************************************************** */
