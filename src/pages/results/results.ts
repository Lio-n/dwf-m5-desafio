import { state } from "../../state";
const winSvg = require("url:../../assets/images/win.svg");
const loseSvg = require("url:../../assets/images/lose.svg");
const drawSvg = require("url:../../assets/images/draw.svg");

export const initResults = (params) => {
  const div = document.createElement("div");

  // I retrieve the last move of the Bot and the User.
  let botMove = state.getState().currentGame.botPlay;
  let myMove = state.getState().currentGame.myPlay;

  div.classList.add("resultHands");
  div.innerHTML = `
  <my-play style="transform: rotate(180deg);" tag="${botMove}"></my-play>
  <my-play tag="${myMove}"></my-play>`;

  const itervalId = setInterval(() => {
    clearInterval(itervalId);

    // Establezco un tiempo para que
    // el Usuario compare su jugada con la del Bot
    let divResult = whoWin(state.whoWin(myMove, botMove));
    div.appendChild(divResult);
    const button = divResult.querySelector("my-button");

    button.addEventListener("click", () => {
      params.goTo("/instruccion");
    });
  }, 1500);

  return div;
};
const whoWin = (data) => {
  // I get the updated score
  const history = state.getState().history;
  const imgState = document.createElement("img");
  imgState.classList.add("stateSvg");

  const divResult = document.createElement("div");

  imgState.setAttribute("src", winSvg);
  divResult.classList.add("win");

  if (data == "Lose") {
    imgState.setAttribute("src", loseSvg);
    divResult.classList.add("lose");
  }
  if (data == "Draw") {
    imgState.setAttribute("src", drawSvg);
    divResult.classList.add("draw");
  }

  divResult.classList.add("play__counter");
  divResult.innerHTML = `
  <div class="image-container">

  </div> 
  <div class="score-container">
    <h2>Score</h2>
    <h4 class="score">Vos: ${history.myScore}</h4>
    <h4 class="score">Bot: ${history.botScore}</h4>
  </div>
  <my-button>Volver a Jugar</my-button>
  `;
  const imageContainer = divResult.querySelector(".image-container");
  imageContainer.appendChild(imgState);

  return divResult;
};
