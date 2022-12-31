//card change
let btn = window.document.querySelector("button");

let rateCard = window.document.querySelector("main");

let thankYouCard = window.document.querySelector("section");

let rate = window.document.querySelector("li");

let thankYouRate = window.document.querySelector("#selection");

function Selection() {
    rate[1].addEventListener("click", function() {
        this.style.backgroundColor = " ";
        this.style.color = " ";

        this.style.backgroundColor = "orange";
        this.style.color = "white";
    }
    )
};

function cardChange() {
    btn.addEventListener("click", function () {
        rateCard.style.display = "none";
        thankYouCard.style.display = "block";
    })
};

function cardChangeCheck() {
    if (cardChange === true) {
        true;
    } else (cardChange === false)
};

//rate number listener

/*function YouSelected() {
    if(rate[1] === thankYouRate) {
        thankYouRate.remove();
        thankYouRate.innerHTML = "You selected 1 out of 5";
    }
}*/
