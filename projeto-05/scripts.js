let submitButton = document.querySelector("button");
let backButton = document.querySelector("#arrow-icon")
let rateCard = document.querySelector("main");
let thankYouCard = document.querySelector("section");
let selection = document.querySelector("#selection");

//before submit
let op1 = document.querySelector("#op1");
let op2 = document.querySelector("#op2");
let op3 = document.querySelector("#op3");
let op4 = document.querySelector("#op4");
let op5 = document.querySelector("#op5");

function optionClick() {
  function activeOption(option) {
    return option.addEventListener("click", function(){
      op1.style.cssText = "background-color: hsl(25, 97%, 53%); color: white";
      op2.style.cssText = "background-color: hsl(25, 97%, 53%); color: white";
      op3.style.cssText = "background-color: hsl(25, 97%, 53%); color: white";
      op4.style.cssText = "background-color: hsl(25, 97%, 53%); color: white";
      op5.style.cssText = "background-color: hsl(25, 97%, 53%); color: white";
    })
  };

  
}


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

/*if (optionClick() = false) {
  cardChange = false;
}*/

cardChange();
optionClick();









