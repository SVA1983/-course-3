import { playGame } from "./helpers.js";
export function renderStartPageComponent({appEl}) {
    let levelGame = "";
    const render = () => {  
        const appHtml = `<div class="level">
            <div class="level-box">
                <div class="level-text-box">
                    <p class="level-text">Выбери сложность</p>
                </div>
                <div class="level-num">
                    <button class="num-item">1</button>
                    <button class="num-item">2</button>
                    <button class="num-item">3</button>
                </div>
                <button class="button-level">Старт</button>
            </div>
        </div>`;
        appEl.innerHTML = appHtml;

        

        for (let levelEl of document.querySelectorAll(".num-item")) {
            levelEl.addEventListener("click", () => {
             levelGame = 1;
             render()
            });
            
        };

        playGame(levelGame)    
    }; 

    render()
    
}