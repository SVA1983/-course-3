import { GAME_PAGE_LEV1, START_PAGE, CARTS_PAGE } from "./routes.js";
import { renderStartPageComponent } from "./components/start-page-component.js";
import { renderGamePageComponent } from "./components/game-page-component.js";
import { renderCartsPageComponent } from "./components/carts-page-component.js";
export let page = null;
export function goToPage(newPage) {
    if (
        [
          START_PAGE,
          GAME_PAGE_LEV1,
          CARTS_PAGE
        ].includes(newPage)
      ) {
        if (newPage === START_PAGE) {
          page = START_PAGE;
            renderApp()

        }
        if (newPage === GAME_PAGE_LEV1) {
          page = GAME_PAGE_LEV1;
          renderApp()

        }
        if (newPage === CARTS_PAGE) {
          page = CARTS_PAGE;
          renderApp()
          
        }

      }; 
    
}
const renderApp = () => {
    const appEl = document.getElementById("app");
    if (page === START_PAGE) { 
        return renderStartPageComponent({appEl})
        
    }
    if(page === GAME_PAGE_LEV1) {
      return renderGamePageComponent ({appEl});
    }
    if (page === CARTS_PAGE) {
      return renderCartsPageComponent({appEl})
    }
};
goToPage(START_PAGE);