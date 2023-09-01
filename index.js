import { GAME_PAGE, START_PAGE } from "./routes.js";
import { renderStartPageComponent } from "./components/start-page-component.js";
import { renderGamePageComponent } from "./components/game-page-component.js";
export let page = null;
export function goToPage(newPage) {
    if (
        [
          START_PAGE,
          GAME_PAGE
        ].includes(newPage)
      ) {
        if (newPage === START_PAGE) {
          page = START_PAGE;
            renderApp()

        }
        if (newPage === GAME_PAGE) {
          page = GAME_PAGE;
          renderApp()

        }

      }; 
    
}
const renderApp = () => {
    const appEl = document.getElementById("app");
    if (page === START_PAGE) { 
        return renderStartPageComponent({appEl})
        
    }
    if(page === GAME_PAGE) {
      return renderGamePageComponent ({appEl});
    }
};
goToPage(START_PAGE);