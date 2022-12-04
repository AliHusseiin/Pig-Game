"use strict";
const scoreP0E = document.getElementById("score--0");
const scoreP1E = document.getElementById("score--1");
const currentScore0E = document.getElementById("current--0");
const currentScore1E = document.getElementById("current--1");
const diceE = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");

let currentScore = 0;
// conditions
scoreP0E.textContent = 0;
scoreP1E.textContent = 0;
diceE.classList.add("hidden");

// rolling the dice functionality
btnRoll.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceE.classList.remove("hidden");
  diceE.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    currentScore0E.textContent = currentScore;
  }
  // else {

  // }
});
