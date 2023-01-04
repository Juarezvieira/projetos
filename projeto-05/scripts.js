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

  function activeOption() {
    const op1Active = op1.addEventListener("click", function () {
      op1.style.cssText = "background-color: #fb7413; color: white";
    });
    const op2Active = op2.addEventListener("click", function () {
      op2.style.cssText = "background-color: #fb7413; color: white";
    });
    const op3Active = op3.addEventListener("click", function () {
      op3.style.cssText = "background-color: #fb7413; color: white";
    });
    const op4Active = op4.addEventListener("click", function () {
      op4.style.cssText = "background-color: #fb7413; color: white";
    });
    const op5Active = op5.addEventListener("click", function () {
      op5.style.cssText = "background-color: #fb7413; color: white";
    });
    if(op1Active) {
      op2Active = false;
      op3Active = false;
      op4Active = false;
      op5Active = false;
    } else if (op2Active) {
      op1Active = false;
      op3Active = false;
      op4Active = false;
      op5Active = false;
    } else if (op3Active) {
      op1Active = false;
      op2Active = false;
      op4Active = false;
      op5Active = false;
    } else if (op4Active) {
      op1Active = false;
      op2Active = false;
      op3Active = false;
      op5Active = false;
    } else if (op5Active) {
      op1Active = false;
      op2Active = false;
      op3Active = false;
      op4Active = false;
    }
    }

    activeOption();
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








