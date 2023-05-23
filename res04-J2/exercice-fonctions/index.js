// TEST

console.log(add(21, 21)); // doit afficher 42
console.log(sub(63, 21)); // doit afficher 42
console.log(mult(21, 2)); // doit afficher 42
console.log(div(84, 2)); // doit afficher 42
console.log(mod(42, 2)); // doit afficher 0



function add(nb1, nb2) {
    let result = nb1 + nb2;
    return result;
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
    let result = nb1 / nb2;
    if (nb2 === 0) {
        console.error("On ne peut pas diviser par 0");
    }
    else {
        return result;
    }
}

function mod(nb1, nb2) {
    let result = nb1 % nb2;
    return result;
}



// EXERCICE 2
function askUserOperation() {
    let operator = window.prompt("Choisis une opération");
    
    if (operator === "%" || operator === "/" || operator === "*" || operator === "-" || operator === "+") {
        return operator;
    }
    else {
        console.error("Ce n'est pas valide");
    }
}

function askUserFirstNumber() {
    let firstNumber = parseInt(window.prompt("Choisis un nombre"));
    return firstNumber;
}

function askUserSecondNumber() {
    let secondNumber = parseInt(window.prompt("Choisis un second nombre"));
    return secondNumber;
}


// EXERCICE 3
function calculator(operator, nb1, nb2) {
    operator = askUserOperation();
    nb1 = askUserFirstNumber();
    nb2 = askUserSecondNumber();
    let result;
    
    if (operator === "+") {
        result = add(nb1, nb2);
    }
    else if (operator === "-") {
        result = sub(nb1, nb2);
    }
    else if (operator === "*") {
        result = mult(nb1, nb2);
    }
    else if (operator === "/") {
        result = div(nb1, nb2);
    }
    else if (operator === "%") {
        result = mod(nb1, nb2);
    }
    
    console.log(`${nb1} ${operator} ${nb2} = ${result}`);
}

calculator();




// CORRECTION
// Correction exercices fonctions
// function add(nb1, nb2)
// {
//     return nb1 + nb2;
// }

// function sub(nb1, nb2)
// {
//     return nb1 - nb2;
// }

// function mult(nb1, nb2)
// {
//     return nb1 ** nb2;
// }

// function div(nb1, nb2)
// {
//     return nb1 / nb2;
// }

// function mod(nb1, nb2)
// {
//     return nb1 % nb2;
// }

// function askUserOperation()
// {
//     return window.prompt("Entrez un opérateur");
// }

// function askUserFirstNumber()
// {
//     return window.prompt("Entrez un nombre");
// }

// function askUserSecondNumber()
// {
//     return window.prompt("Entrez un autre nombre");
// }

// function dispatchOperation(nb1, ope, nb2)  
// {
//     if(ope === "+")
//   {
//       console.log(`${nb1} ${ope} ${nb2} = ${add(nb1, nb2)}`);
//   }
//   else if(ope === "-")
//   {
//       console.log(`${nb1} ${ope} ${nb2} = ${sub(nb1, nb2)}`);
//   }
//   else if(ope === "*")
//   {
//       console.log(`${nb1} ${ope} ${nb2} = ${mult(nb1, nb2)}`);
//   }
//   else if(ope === "/")
//   {
//       console.log(`${nb1} ${ope} ${nb2} = ${div(nb1, nb2)}`);
//   }
//   else if(ope === "%")
//   {
//       console.log(`${nb1} ${ope} ${nb2} = ${mod(nb1, nb2)}`);
//   }
// }

// function calculator()
// {
//     let nb1 = askUserFirstNumber();
//   let ope = askUserOperation();
//   let nb2 = askUserSecondNumber();
  
//   dispatchOperation(parseInt(nb1), ope, parseInt(nb2));
// }

// calculator();
