var fans = document.querySelector(".fans");
var fish = document.querySelector(".fish");
var pets = document.querySelector(".pets");
var toggle = document.querySelector("#toggle");
// console.log(toggle);
var ball = document.querySelector(".ball");
// console.log(ball);
var name = document.querySelector("h1");
// console.log(name);
var body = document.querySelector("body");
// console.log(body);

fans.addEventListener("mouseover", function () {
  fans.innerText = "123K";
});

fish.addEventListener("mouseover", function () {
  fish.innerText = "47K";
});

pets.addEventListener("mouseover", function () {
  pets.innerText = "20K";
});

toggle.addEventListener("click", function () {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    ball.classList.remove("move-right");
    name.innerText = "Stealth Quincy";
  } else {
    body.classList.add("light");
    ball.classList.add("move-right");
    name.innerText = "Party Quincy";
  }
});
