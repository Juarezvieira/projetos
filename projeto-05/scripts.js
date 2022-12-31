let rate = document.getElementsByTagName("li");

rate.addEventListener("mouseover", function(){
    this.removeProperty("backgroundColor");
    this.style.backgroundColor = "white";
});