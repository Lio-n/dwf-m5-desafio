type Jugada = "rock" | "paper" | "scissors";
type Game = {
  myScore: number;
  botScore: number;
};
export const state = {
  data: {
    currentGame: {
      myPlay: "",
      botPlay: "",
    },
    // Guardar los resultados
    history: {
      myScore: 0,
      botScore: 0,
    },
  },
  listeners: [],
  // Initializar
  init() {
    // Get the local data
    const localData = JSON.parse(localStorage.getItem("saved-state"));
    // If localdata retuns "null", do nothing
    if (!localData) {
      return;
    } else {
      this.setState(localData);
    }
  },
  // Get the data
  getState() {
    return this.data;
  },
  // Stores the data
  setState(newStateHistory) {
    this.data.history = newStateHistory;
    //callback = cb
    localStorage.setItem("saved-state", JSON.stringify(newStateHistory));
  },
  // Only stores data.currentGame
  setMove(myMove: Jugada, botMove: Jugada) {
    const currentState = this.getState();
    currentState.currentGame.myPlay = myMove;
    currentState.currentGame.botPlay = botMove;
  },

  // Tijera > Papel > Piedra > Tijera
  // Como determinar quien gano?
  whoWin(myPlay: Jugada, botPlay: Jugada) {
    let result = "Draw";
    if (myPlay == botPlay) {
      this.pushToHistory({ myScore: 0, botScore: 0 });
      // Using return without a value will return the value undefined.
      // Undefined will work as false
      return result;
    }
    const ganeTijera = myPlay == "scissors" && botPlay == "paper";
    const ganePapel = myPlay == "paper" && botPlay == "rock";
    const ganePiedra = myPlay == "rock" && botPlay == "scissors";

    // Si esto retorna False Gana el Bot
    result = [ganeTijera, ganePapel, ganePiedra].includes(true)
      ? "Win"
      : "Lose";

    result == "Win"
      ? this.pushToHistory({ myScore: 1, botScore: 0 })
      : this.pushToHistory({ myScore: 0, botScore: 1 });
    return result;
  },

  // Only stores data.history
  pushToHistory(play: Game) {
    const currentState = this.getState();
    // Obtengo los ultimos valores de cada uno
    const myScore = currentState.history.myScore;
    const botScore = currentState.history.botScore;

    // Sumo "play" + sus ultimos valores [myScore, botScore]
    currentState.history.myScore = myScore + play.myScore;
    currentState.history.botScore = botScore + play.botScore;
    this.setState(currentState.history);
  },
};
