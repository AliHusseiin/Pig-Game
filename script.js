"use strict";
const scoreP0E = document.getElementById("score--0");
const scoreP1E = document.getElementById("score--1");
const currentScore0E = document.getElementById("current--0");
const currentScore1E = document.getElementById("current--1");
const diceE = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const playerE0 = document.querySelector(".player--0");
const playerE1 = document.querySelector(".player--1");

// conditions
let playing, currentScore, activePlayer, socres;
const init = function () {
  playing = true;
  currentScore = 0;
  activePlayer = 0;
  socres = [0, 0];

  scoreP0E.textContent = 0;
  scoreP1E.textContent = 0;
  currentScore0E.textContent = 0;
  currentScore1E.textContent = 0;

  diceE.classList.add("hidden");
  playerE0.classList.add("player--active");
  playerE1.classList.remove("player--active");
  playerE0.classList.remove("player--winner");
  playerE1.classList.remove("player--winner");
};
init();
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  playerE0.classList.toggle("player--active");
  playerE1.classList.toggle("player--active");
};

// rolling the dice functionality

btnRoll.addEventListener("click", function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceE.classList.remove("hidden");
    diceE.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;

      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    socres[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      socres[activePlayer];
    if (socres[activePlayer] >= 20) {
      playing = false;
      diceE.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else switchPlayer();
  }
});
btnNew.addEventListener("click", init);
