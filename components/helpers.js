import { goToPage } from "../index.js";
import { CARTS_PAGE, GAME_PAGE_LEV1, } from "../routes.js";
export function playGame(level) {
    
    const playButton = document.querySelector(".button-level").addEventListener("click", () => {
       
        if(level === 1) { 
            goToPage(GAME_PAGE_LEV1)
        }
        else {
            alert("Выберете уровень сложности")
        }
    })
    
};
export function againGame(level) {
    
    const againButton = document.querySelector(".button-game").addEventListener("click", () => {
            goToPage(CARTS_PAGE)
        })
    
}

