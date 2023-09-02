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
                    <button data-index = "1" class="num-item">1</button>
                    <button data-index = "2" class="num-item">2</button>
                    <button data-index = "3" class="num-item">3</button>
               
                </div>
                <button class="button-level">Старт</button>
            </div>
        </div>`;
        appEl.innerHTML = appHtml;

        
      
   
        for (let levelEl of document.querySelectorAll(".num-item")) { 
            const index = levelEl.dataset.index; 
            levelEl.addEventListener("click", () => {
                levelEl.classList.add("active");
                if(index == 1) { 
                    levelGame = 1; 
                }
                if (index ==2) {
                    levelGame = 2
                }
                if (index == 3) {
                    levelGame = 3
                }; 
            playGame(levelGame) 
            });    
        };    
    }; 

    render()
    
}

     // <button class="${levelGame? "num-item active" : "num-item"}">1</button>
                    // <button class="${levelGame? "num-item active" : "num-item"}">2</button>
                    // <button class="${levelGame? "num-item active" : "num-item"}">3</button>