import { addImg } from "../carts-name.js";
export function renderCartsPageComponent({appEl}) {
    const render = () => {  
        const appHtml = `<div class="game">
        <div class="game-box">
            <div class="data-game-box">
                <div class="time-game-box">
                    <img src="img/таймер.svg" alt="">
                </div>
                <div class="button-game-box">
                    <button class="button-game">Начать заново</button>
                </div>       
            </div> 
            <div class="cart-img">
            
                     
            </div>  
        </div>     
    </div>`;
        appEl.innerHTML = appHtml;

        addImg()

        

        
 
    }; 

    render()
    
}