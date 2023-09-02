import { againGame } from "./helpers.js";
export function renderGamePageComponent({appEl}) {
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
            <div class="cart-game">
            <div class="cart-item"></div>
                    <div class="cart-item"></div>
                    <div class="cart-item"></div>
                    <div class="cart-item"></div>
                    <div class="cart-item"></div>
                    <div class="cart-item"></div>
                    <div class="cart-item"></div>
                    <div class="cart-item"></div>
                    <div class="cart-item"></div>
                    <div class="cart-item"></div>
                    <div class="cart-item"></div>
                    <div class="cart-item"></div>
                    <div class="cart-item"></div>
                    <div class="cart-item"></div>
                    <div class="cart-item"></div>
                    <div class="cart-item"></div>
                    <div class="cart-item"></div>
                    <div class="cart-item"></div>
                    <div class="cart-item"></div>
                    <div class="cart-item"></div>
                    <div class="cart-item"></div>
                    <div class="cart-item"></div>
                    <div class="cart-item"></div>
                    <div class="cart-item"></div>
                    <div class="cart-item"></div>
                    <div class="cart-item"></div>
                    <div class="cart-item"></div>
                    <div class="cart-item"></div>
                    <div class="cart-item"></div>
                    <div class="cart-item"></div>
                    <div class="cart-item"></div>
                    <div class="cart-item"></div>
                    <div class="cart-item"></div>
                    <div class="cart-item"></div>
                    <div class="cart-item"></div>
                    <div class="cart-item"></div>  
            </div>  
        </div>     
    </div>`;
        appEl.innerHTML = appHtml;

        againGame();



        
 
    }; 

    render()
    
}