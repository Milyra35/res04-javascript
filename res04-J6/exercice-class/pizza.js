class Pizza {
    #name;
    #ingredient1;
    #ingredient2;
    #ingredient3;
    
    constructor(name, ingredient1, ingredient2, ingredient3) {
        this.#name = name;
        this.#ingredient1 = ingredient1;
        this.#ingredient2 = ingredient2;
        this.#ingredient3 = ingredient3;
    }
    
    get name() {
        return this.#name;
    }
    set name (name) {
        this.#name = name;
    }
    
    get ingredient1() {
        return this.#name;
    }
    set ingredient1 (ingredient1) {
        this.#ingredient1 = ingredient1;
    }
    
    get ingredient2() {
        return this.#name;
    }
    set ingredient2 (ingredient2) {
        this.#ingredient2 = ingredient2;
    }
    
    get ingredient3() {
        return this.#name;
    }
    set ingredient3 (ingredient3) {
        this.#ingredient3 = ingredient3;
    }
}

export {Pizza};


class ToDoList {
    #task1;
    
    constructor(task1) {
        this.#task1 = task1;
    }
    
    get task1() {
        return this.#task1;
    }
    set task1 (task1) {
        this.#task1 = task1;
    }
    
    getInputs(ToDoList) {
        let body = document.querySelector("body");
        let section = document.createElement("section");
        let ul = document.createElement("ul");
        let li = document.createElement("li");
        body.appendChild(section);
        section.appendChild(ul);
        ul.appendChild(li);
        let text = document.createTextNode(ToDoList);
        li.appendChild(text);
    }
}

export {ToDoList};