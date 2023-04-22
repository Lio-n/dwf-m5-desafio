import "./components/my-play/my-play";
import "./components/button/button";
import "./components/text-style/text-style";
import { initRouter } from "./router";
import { state } from "./state";

(function main() {
  state.init();
  const root = document.querySelector(".root");
  initRouter(root as Element);
})();
