import { START_PAGE } from "./routes.js";
export let page = null;
function goToPage(newPage) {
    if (
        [
          START_PAGE,
          
        ].includes(newPage)
      ) {
        if (newPage === START_PAGE) {

        }

      }


    
}
const renderApp = () => {
    const appEl = document.querySelector(".top");
    if (page === START_PAGE) {
        
        
    }
}