import {Ingredient} from './classes/ingredient.js';

window.addEventListener("DOMContentLoaded", function() {
    let availableIngredients = [];
    
    let bacon = new Ingredient ("Bacon", "assets/img/bacon.png");
    let carotte = new Ingredient ("Carotte", "assets/img/carrots.png");
    let fromage = new Ingredient ("Fromage", "assets/img/cheese.png");
    let oeuf = new Ingredient ("Oeuf", "assets/img/egg.png");
    let aubergine = new Ingredient ("Aubergine", "assets/img/eggplant.png");
    let goatCheese = new Ingredient ("Fromage de chèvre", "assets/img/goat-cheese.png");
    let miel = new Ingredient ("Miel", "assets/img/honey.png");
    let champignon = new Ingredient ("Champignon", "assets/img/mushroom.png");
    let olive = new Ingredient ("Olive", "assets/img/olive.png");
    let piment = new Ingredient ("Piment", "assets/img/pepper.png");
    let potatoe = new Ingredient ("Pomme de terre", "assets/img/potato.png");
    let tomate = new Ingredient ("Tomate", "assets/img/tomato.png");
    
    availableIngredients.push(bacon, carotte, fromage, oeuf, aubergine, goatCheese, miel, champignon, olive, piment, potatoe, tomate);
    // console.log(availableIngredients);
    
    function choiceIngredients() {
        let stage = document.getElementById("stage");
        
        // Create all the elements we need to make the correct architecture
        let ul = document.createElement("ul");
        
        
        for (let i=0; i<availableIngredients.length; i++) {
            let li = document.createElement("li");
            let article = document.createElement("article");
            let header = document.createElement("header");
            let h3 = document.createElement("h3");
            let figure = document.createElement("figure");
            let img = document.createElement("img");
            
            img.src = `${availableIngredients[i].file}`;
            h3.innerHTML = `${availableIngredients[i].name}`;
            figure.appendChild(img);
            header.appendChild(figure);
            header.appendChild(h3);
            article.appendChild(header);
            li.appendChild(article);
            ul.appendChild(li);
        }
        stage.appendChild(ul);
        
        //Select the ingredients and deselect them
        let ingredients = document.querySelectorAll("#stage ul li article");
        let header = document.querySelectorAll("#stage ul li article header");
        
        for (let i=0; i<ingredients.length; i++)
        {
            header[i].addEventListener("click", function(event) {
                let click = event.target;
                ingredients[i].classList.toggle("selected");
                click.classList.toggle("selected");
            })
        }
    }

    choiceIngredients();
})