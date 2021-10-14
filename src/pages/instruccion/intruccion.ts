export const initInstruccion = (params) => {
  const div = document.createElement("div");
  div.innerHTML = `
  <text-style tag="h2">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</text-style>
  <my-button>¡Jugar!</my-button>
  <my-play></my-play>
  `;
  const button = div.querySelector("my-button");

  button.addEventListener("click", () => {
    params.goTo("/play");
  });
  return div;
};
