export class Button extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.render();
  }
  render() {
    const style = document.createElement("style");
    style.innerHTML = `
    button{
      letter-spacing: 2px; 
      font-family: 'Odibee Sans', cursive; 
      font-size: 45px; 
      font-weight: 400; 
      color: #D8FCFC; 
      width: 100%; 
      height: 84px; 
      border-radius: 10px; 
      border: 10px solid #001997; 
      background: #006CFC;
      cursor: pointer;}`;
    this.shadow.appendChild(style);

    const button = document.createElement("button");
    button.textContent = this.textContent;
    this.shadow.appendChild(button);
  }
}

customElements.define("my-button", Button);
