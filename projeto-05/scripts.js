let submitButton = document.querySelector("button");
let backButton = document.querySelector("#arrow-icon")
let rateCard = document.querySelector("main");
let thankYouCard = document.querySelector("section");
let ratingOptions = document.querySelectorAll("li");
let selection = document.querySelector("#selection");

//before submit





//after submit
function cardChange() {
  submitButton.addEventListener("click", function () {
    rateCard.style.display = "none";
    thankYouCard.style.display = "block";
  });
  backButton.addEventListener("click", function () {
    thankYouCard.style.display = "none";
    rateCard.style.display = "block";
  })
};

cardChange();
optionClick();








