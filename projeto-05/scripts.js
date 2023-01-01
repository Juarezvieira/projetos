//card change
let btn = document.querySelector("button");
let rateCard = document.querySelector("main");
let thankYouCard = document.querySelector("section");
let rates = document.querySelectorAll("li");
let thankYouRate = document.querySelector("#selection");

function Selection() {
  rates.forEach(rates => {
    rates.addEventListener("click", function() {
      this.style.backgroundColor = "hsl(25, 97%, 53%)";
      this.style.color = "white";
    });
  });
}

function colorRateSelection() {
    if (Selection(rates[1]) === true ) {
      rates[2].addEventListener("click", function() { 
        rates[2].style.backgroundColor = "hsl(218, 13%, 17%)";
        rates[2].style.backgroundColor = "hsl(216, 12%, 54%)";
    })
} }

function cardChange() {
  btn.addEventListener("click", function() {
    rateCard.style.display = "none";
    thankYouCard.style.display = "block";
  });
}

Selection();
cardChange();

//rate number listener

