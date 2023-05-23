// TEST

console.log(add(21, 21)); // doit afficher 42
console.log(sub(63, 21)); // doit afficher 42
console.log(mult(21, 2)); // doit afficher 42
console.log(div(84, 2)); // doit afficher 42
console.log(mod(42, 2)); // doit afficher 0



function add(nb1, nb2) {
    let sum = nb1 + nb2;
    return sum;
}

function sub(nb1, nb2) {
    let result = nb1 - nb2;
    return result;
}

function mult(nb1, nb2) {
    let result = nb1 * nb2;
    return result;
}

function div(nb1, nb2) {
    if (nb2 === 0) {
        console.error("On ne peut pas diviser par 0");
    }
    let result = nb1 / nb2;
    return result;
}

function mod(nb1, nb2) {
    let result = nb1 % nb2;
    return result;
}



// EXERCICE 2
function askUserOperation() {
    
    if (operator !== "mod" || operator !== "div" || operator !== "mult" || operator !== "sub" || operator !== "add") {
        console.error("Ce n'est pas valide");
    }
    
    let operator = window.prompt("Choisis une opération");
    return operator;
}

function askUserFirstNumber() {
    let firstNumber = Number(window.prompt("Choisis un nombre"));
    return firstNumber;
}

function askUserSecondNumber() {
    let secondNumber = Number(window.prompt("Choisis un second nombre"));
    return secondNumber;
}


// EXERCICE 3
function calculator(nb1, nb2, operator) {
    
}