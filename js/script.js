let button = document.querySelector(".click");
let test = document.querySelector(".test");
let question = document.querySelector(".question");

button.addEventListener("click", function(){
    test.style.display = "none";
    question.style.display =" block";
});