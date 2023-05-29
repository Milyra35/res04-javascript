import {Pizza} from './pizza.js';
import {ToDoList} from './pizza.js';

window.addEventListener("DOMContentLoaded", function() {
    toDoList();
})

function menuPizza() {
    let veggie = new Pizza("Veggie", "Tomate", "Fromage", "Légumes");
    let meattie = new Pizza("Meattie", "Tomate", "Fromage", "Viande");
    let fishie = new Pizza("Fishie", "Tomate", "Fromage", "Poisson");
    
    console.log(fishie);
}

function toDoList() {
    let addTaskBtn = document.getElementById("add-task");
    let task = document.querySelector("body form input");
    
    let x = 0;
    
    addTaskBtn.addEventListener("click", function(event) {
        event.preventDefault();
        if (x<5) {
            let list = new ToDoList(task.value);
            list.getInputs(task.value);
            x++;
        }
    });
}


// input.addEventListener("change", function() {
//             console.log(input.value);
//         });