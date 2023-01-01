//card change
let submitButton = document.querySelector("button");
let rateCard = document.querySelector("#rate-card");
let thankYouCard = document.querySelector("#thank-you-card");
let thankYouRate = document.querySelector("#thank-you-rate");
let ratingOptions = document.querySelectorAll("li");
let ratingIsActive = true;

ratingOptions.forEach(function(option) {
  if (ratingIsActive) {
    option.addEventListener("click", function() {
    option.style.backgroundColor = "hsl(25, 97%, 53%)";
    option.style.color = "white";
  })} else {
    option.addEventListener("click", function(){
      option.style.backgroundColor = "hsl(219, 11%, 31%)";
      option.style.color = "white";
    })
  }
});

submitButton.addEventListener("click", function() {
  rateCard.style.display = "none";
  thankYouCard.style.display = "block";
});

ratingClick();
cardChange();

//rate number listener

