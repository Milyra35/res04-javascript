class Pizza {
    #ingredients;
    
    constructor() {
        this.#ingredients = [];
    }
    
    get ingredients() {
        return this.#ingredients;
    }
    
    addIngredients(ingredient) {
        this.#ingredients.push(ingredient);
    }
    
    removeIngredient(ingredient) {
        let index = this.#ingredients.indexOf(ingredient);
        // Check if the ingredient is found in the array
        if (index > -1)
        {
            // If found, it is deleted from the array
            this.#ingredients.splice(index, 1);
        }
    }
    
    display(ingredient) {
        // Retrieve the right area to put the ingredients in
        let aside = document.querySelector("body main aside");
        let ul = document.querySelector("body main aside ul");
        let lastLi = document.querySelector("body main aside li:last-of-type");
        let li = document.createElement("li");
        
        if (this.#ingredients.includes(ingredient))
        {
            let index = this.#ingredients.indexOf(ingredient) + 1;
            let removeLi = document.querySelector(`aside ul li:nth-of-type(${index})`);
            removeLi.remove();
        }
        else
        {
            let article = document.createElement("article");
            let header = document.createElement("header");
            let h3 = document.createElement("h3");
            let figure = document.createElement("figure");
            let img = document.createElement("img");
            let input = document.createElement("input");
            input.setAttribute("type", "number");
            input.setAttribute("max", "3");
            input.setAttribute("min", "1");
            input.setAttribute("value", "1");
            
            img.src = `${ingredient.file}`;
            h3.innerHTML = `${ingredient.name}`;
            figure.appendChild(img);
            figure.appendChild(input);
            header.appendChild(figure);
            header.appendChild(h3);
            article.appendChild(header);
            li.appendChild(article);
            ul.insertBefore(li, lastLi);
        }
    }
}

export {Pizza};