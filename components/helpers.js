import { goToPage } from "../index.js";
import { GAME_PAGE } from "../routes.js";
export function playGame(level) {
    
    const playButton = document.querySelector(".button-level").addEventListener("click", () => {
       
        if(level === 1) { 
            goToPage(GAME_PAGE)
        }
        else {
            alert("Выберете уровень сложности")
        }
    })
    
}