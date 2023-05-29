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
    #task2;
    #task3;
    #task4;
    #task5;
    
    constructor(task1, task2, task3, task4, task5) {
        this.#task1 = task1;
        this.#task2 = task2;
        this.#task3 = task3;
        this.#task4 = task4;
        this.#task5 = task5;
    }
    
    get task1() {
        return this.#task1;
    }
    set task1 (task1) {
        this.#task1 = task1;
    }
    
    get task2() {
        return this.#task2;
    }
    set task2 (task2) {
        this.#task2 = task2;
    }
    
    get task3() {
        return this.#task3;
    }
    set task3 (task3) {
        this.#task3 = task3;
    }
    
    get task4() {
        return this.#task4;
    }
    set task4 (task4) {
        this.#task4 = task4;
    }
    
    get task5() {
        return this.#task5;
    }
    set task5 (task5) {
        this.#task5 = task5;
    }
}

export {ToDoList};