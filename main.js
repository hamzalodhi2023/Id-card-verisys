/*********************************************************
 * ! VARIABLES SECTION STARTED
 ********************************************************** */

let cardMainDiv = document.querySelector(".card-main-div");
let searchBtn = document.querySelector("button");
let closeBtn = document.querySelector(".fa-xmark");

let idInput = document.querySelector("#idNumber");
let issuedDataInput = document.querySelector("#issuedData");
let form = document.querySelector("form");

let popup = document.querySelector(".card-main-div");

let photo = document.querySelector(".photo img");
let Name = document.querySelector(".card h3");
let Rank = document.querySelector(".card p");
let serviceID = document.querySelector("#service-id");
let posting = document.querySelector("#posting");
let id = document.querySelector("#id");
let issuedDate = document.querySelector("#issuedDate");
let expiryDate = document.querySelector("#expiryDate");
let cardStatus = document.querySelector("#status");

/*********************************************************
 * ! VARIABLES SECTION ENDED
 ********************************************************** */

/*********************************************************
 * ! POPUP CLOSING LOGIC STARTED
 ********************************************************** */

closeBtn.addEventListener("click", function () {
  cardMainDiv.style.scale = "0%";
});

/*********************************************************
 * ! POPUP CLOSING LOGIC ENDED
 ********************************************************** */

/**********************************************************
 * ! DATA FETCHING LOGIC STARTED
 ********************************************************* */

form.addEventListener("submit", function (e) {
  e.preventDefault();
  e.target.btn.innerText = "Verifying...";

  let DataFetchingURL = `
    https://script.google.com/macros/s/AKfycbzH2xMbVlbF0Co-Ro4cEsVd2QaUKRGqzjXOpwGEOLDDf4sSQHdV-n62vGQKGqi3k11FOQ/exec`;

  fetch(`${DataFetchingURL}?ID=${encodeURIComponent(idInput.value)}`)
    .then((res) => {
      return res.json();
    })
    .then((finalRes) => {
      if (finalRes.data[0] !== undefined) {
        e.target.btn.innerText = "Verified Successfully!";
        e.target.btn.style.color = "#14ff2c";

        photo.src = finalRes.data[0].Photo;
        Name.innerText = finalRes.data[0].Name;
        Rank.innerText = finalRes.data[0].Rank;
        serviceID.innerText = finalRes.data[0].Service_ID;
        posting.innerText = finalRes.data[0].Posting;
        id.innerText = finalRes.data[0].ID;
        issuedDate.innerText = finalRes.data[0].Issued_Date;
        expiryDate.innerText = finalRes.data[0].Expiry_Date;
        cardStatus.innerText = finalRes.data[0].Card_Status;

        setTimeout(() => {
          popup.style.scale = "100%";
          e.target.btn.style.color = "#fff";
        }, 2000);
      } else {
        e.target.btn.innerText = "Unverified";
        e.target.btn.style.color = "#ff3838";
      }
      setTimeout(() => {
        e.target.btn.innerText = "Verify";
        e.target.btn.style.color = "#fff";
      }, 2000);
      form.reset();
    })
    .catch((error) => {
      console.log(error);
    });
});

/*********************************************************
 * ! DATA FETCHING LOGIC ENDED
 ********************************************************** */
