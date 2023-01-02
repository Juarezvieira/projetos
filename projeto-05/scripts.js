let submitButton = document.querySelector("button");
let rateCard = document.querySelector("main");
let thankYouCard = document.querySelector("section");
let thankYouRate = document.querySelector("#thank-you-rate");
let ratingOptions = document.querySelectorAll("ul");


function optionClick() {
  const ratingOptions = document.querySelectorAll("li");

  ratingOptions.addEventListener.ForEach("click", function(){

    ratingOptions.style.backgroundColor = "#fb7413";
      });
    };



//card change submit
function cardChange() {
  submitButton.addEventListener("click", function() {
    rateCard.style.display = "none";
    thankYouCard.style.display = "block";
  })
}

cardChange();
optionClick();








