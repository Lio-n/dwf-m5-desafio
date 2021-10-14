export const initWelcome = (params) => {
  const div = document.createElement("div");
  div.innerHTML = `
    <text-style tag="h1">Piedra Papel <span>ó</span> Tijera</text-style>
    <my-button>Empezar</my-button>
    <my-play></my-play>
    `;

  const button = div.querySelector("my-button");

  button.addEventListener("click", () => {
    params.goTo("/instruccion");
  });
  return div;
};
