import {Request} from './input.js';

window.addEventListener("DOMContentLoaded", function() {
    getInputs();
    let request = new Request();
})

function getInputs() {
    let inputs = document.querySelectorAll("body form input");
    console.log(inputs);
    
    for (let input of inputs) {
        input.addEventListener("change", function() {
            console.log(input.value);
        });
        
    }
}