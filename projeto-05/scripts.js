let submitButton = document.querySelector("button");
let backButton = document.querySelector("#arrow-icon")
let rateCard = document.querySelector("main");
let thankYouCard = document.querySelector("section");

//before submit

//rate function

let op = document.querySelectorAll("li");


function opClickActive() {
  op.forEach(function (li) {
    li.addEventListener("click", function () {
      op.forEach(function (li) {
        li.style.cssText = "";
      });
      li.style.cssText = "background-color: #fb7413; color: white";
      submitButton.style.cssText = "background-color: white; color: #fb7413";
    });
  });

};

//after submit
function cardChange() {
  submitButton.addEventListener("click", function () {
    rateCard.style.display = "none";
    thankYouCard.style.display = "block";
  })
};
backButton.addEventListener("click", function () {
  thankYouCard.style.display = "none";
  rateCard.style.display = "block";
  window.location.reload(true);
})


//listening the rate
  let op1 = document.querySelector("#op1");
  let op2 = document.querySelector("#op2");
  let op3 = document.querySelector("#op3");
  let op4 = document.querySelector("#op4");
  let op5 = document.querySelector("#op5");

  let selection1 = document.querySelector("#selection1");
  let selection2 = document.querySelector("#selection2");
  let selection3 = document.querySelector("#selection3");
  let selection4 = document.querySelector("#selection4");
  let selection5 = document.querySelector("#selection5");


  function rateListener() {
    op1.addEventListener("click", function () {
      selection1.style.display = "block";
      selection2.style.display = "none";
      selection3.style.display = "none";
      selection4.sytle.display = "none";
      selection1.style.display = "none";
    });
    op2.addEventListener("click", function () {
      selection1.style.display - "none";
      selection2.style.display = "block";
      selection3.style.display = "none";
      selection4.sytle.display = "none";
      selection1.style.display = "none";
    });
    op3.addEventListener("click", function () {
      selection1.style.display - "none";
      selection2.style.display = "none";
      selection3.style.display = "block";
      selection4.sytle.display = "none";
      selection1.style.display = "none";
    });
    op4.addEventListener("click", function () {
      selection4.style.display = "block";
      selection1.style.display - "none";
      selection2.style.display = "none";
      selection3.style.display = "none";
      selection4.sytle.display = "none";
    });
    op5.addEventListener("click", function () {
      selection5.style.display = "block";
      selection1.style.display - "none";
      selection2.style.display = "none";
      selection3.style.display = "none";
      selection4.sytle.display = "none";
    });
  };



cardChange();
opClickActive();
rateListener();









