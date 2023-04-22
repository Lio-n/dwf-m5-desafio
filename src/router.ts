import { initWelcome } from "./pages/welcome";
import { initInstruccion } from "./pages/intruccion";
import { initPlay } from "./pages/play";
import { initResults } from "./pages/results";

const routes = [
  {
    path: /\//,
    handler: initWelcome,
  },
  {
    path: /\/welcome/,
    handler: initWelcome,
  },
  {
    path: /\/instruccion/,
    handler: initInstruccion,
  },
  {
    path: /\/play/,
    handler: initPlay,
  },
  {
    path: /\/results/,
    handler: initResults,
  },
];

// Recibe el Element con la Class ".root"
// Ya esta incluida en el HTML
export const initRouter = (container: Element) => {
  // Actualiza la URL
  const goTo = (path) => {
    history.pushState({}, "", path);
    handleRouter(path);
  };

  const handleRouter = (route) => {
    for (const r of routes) {
      // Busca la funcion que se compatible con el Path
      if (r.path.test(route)) {
        // Ejecuta esa funcion compatible
        // La funcion retorna un Elemento que es agregado al DOM
        const elementResult: any = r.handler({ goTo: goTo });

        // Comprueba si hay un Elemento anterior y lo elimina
        if (container.firstChild) {
          container.firstChild.remove();
        }
        // Agregar el Elemento que retorno la funcion
        container.appendChild(elementResult);
      }
    }
  };
  handleRouter(location.pathname);

  // Cambia la entrada del historial actual a la de la última página que visitó el usuario
  window.onpopstate = function () {
    handleRouter(location.pathname);
  };
};
