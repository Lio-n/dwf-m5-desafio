const rock = require("url:../../assets/images/rock.svg");
const paper = require("url:../../assets/images/paper.svg");
const scissors = require("url:../../assets/images/scissors.svg");

const tags_options = { rock, paper, scissors };

export class Play extends HTMLElement {
  shadow: ShadowRoot;
  tag: string;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.tag = this.getAttribute("tag") || "";
    this.render();
  }
  render() {
    const style = document.createElement("style");
    style.innerHTML = `* {box-sizing: border-box;margin: 0;padding: 0;}
    .root{display: flex; justify-content: space-around; margin-top: 2rem;}
    img{cursor: pointer;} `;
    this.shadow.appendChild(style);

    const div = document.createElement("div");
    div.classList.add("root");

    if (tags_options[this.tag]) {
      div.innerHTML = `<img class="rock" src="${tags_options[this.tag]}" alt="rock">`;
    } else {
      div.innerHTML = `
      <img class="rock" src="${rock}" alt="rock">
      <img class="paper" src="${paper}" alt="paper">
      <img class="scissors" src="${scissors}" alt="scissors">`;
    }

    this.shadow.appendChild(div);
  }
}

customElements.define("my-play", Play);
