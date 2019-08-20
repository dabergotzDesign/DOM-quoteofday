import quotes from "./quotes.js";

let button = document.querySelector("button");
let pickQuote = [Math.floor(Math.random() * quotes.length)];

button.addEventListener("click", function showQuote() {
  document.querySelector("p").innerHTML = quotes[pickQuote];
});
