import quotes from "./quotes.js";

let button = document.querySelector("button");

button.addEventListener("click", function() {
  let pickQuote = [Math.floor(Math.random() * quotes.length)];
  document.querySelector("p").innerHTML = quotes[pickQuote];
});
