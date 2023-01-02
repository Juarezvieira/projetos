let submitButton = document.querySelector("button");
let rateCard = document.querySelector("main");
let thankYouCard = document.querySelector("section");
let thankYouRate = document.querySelector("#thank-you-rate");
let ratingOptions = [document.querySelector("li")[0], document.querySelector("li")[1], document.querySelector("li")[2], document.querySelector("li")[3], document.querySelector("li")[4]];


ratingOptions[1].style.backgroundColor = "white";


//card change submit
function cardChange() {
  submitButton.addEventListener("click", function() {
    rateCard.style.display = "none";
    thankYouCard.style.display = "block";
  })
}

cardChange();


//rate number listener
