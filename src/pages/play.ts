import { state } from "../state";

export const initPlay = (params) => {
  const div = document.createElement("div");
  div.classList.add("play");

  let count = 2;
  let h1 = document.createElement("h1");

  // This boolean controls whether any of the three options are selected
  let isSelected = false;
  div.appendChild(h1);
  h1.textContent = "3";
  // Set time 3s
  const intervalId = setInterval(() => {
    h1.textContent = `${count}`;

    count--;
    // If I don't select any of the three options.
    // It stops counting and redirects to "/instruction".
    if (count < 0 && !isSelected) {
      clearInterval(intervalId);
      params.goTo("/instruccion");
    }
    // If I select any of the Three Options
    // It stops counting and redirects to "/results".
    if (count < 0 && isSelected) {
      clearInterval(intervalId);
      params.goTo("/results");
    }
  }, 1000);

  // Bot Move Aleatorio
  const botMoveAl = () => {
    let num = Math.floor(Math.random() * (3 - 0)) + 0;
    let array = ["rock", "paper", "scissors"];
    return array[num];
  };

  const myPlayEl = document.createElement("my-play");
  myPlayEl.classList.add("isSelected");
  div.appendChild(myPlayEl);
  myPlayEl.addEventListener("click", (e: any) => {
    // I use 'any' to avoid problems
    // when sending data to whoWin()
    const myMove = e.originalTarget.className;
    const botMove = botMoveAl();

    // Guardo la Jugada del Usuario y del Bot
    state.setMove(myMove, botMove as any);
    isSelected = true;
  });

  return div;
};
