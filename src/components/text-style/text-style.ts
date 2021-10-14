export class Text extends HTMLElement {
  shadow: ShadowRoot;
  tagName: string;
  // If it receives an Incorrect String or none at all
  // Default will be "h3".
  tags: string[] = ["h1", "h2", "h3"];
  tag: string = "h3";
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    if (this.tags.includes(this.getAttribute("tag"))) {
      this.tag = this.getAttribute("tag") || this.tag;
    }
    this.render();
  }
  render() {
    const style = document.createElement("style");
    style.innerHTML = `
    *{font-family: "Noto Sans Mono", monospace;}
    h1 {margin: 0 0 2rem 0; font-size: 80px; color: #009048;}
    span {color: #91ccaf;}
    h2{margin: 0 0 2rem 0; text-align: center; font-size: 40px;}`;
    this.shadow.appendChild(style);

    const rootEl = document.createElement(this.tag);
    rootEl.textContent = this.textContent;
    this.shadow.appendChild(rootEl);
  }
}

customElements.define("text-style", Text);
