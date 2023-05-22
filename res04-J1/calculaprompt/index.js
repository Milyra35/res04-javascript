let number1 = Number(window.prompt("Choisis un nombre"));
let operator = window.prompt("Mets un opérateur");
let number2 = Number(window.prompt("Choisis un autre nombre"));
let result;

console.log(number1 + operator + number2);

if (isNaN(number1) || isNaN(number2)) {
    window.alert("Merci de vérifier les données");
}


if (operator === "+") {
    result = number1 + number2;
    console.log(result);
}
else if (operator === "-") {
    result = number1 - number2;
    console.log(result);
}
else if (operator === "*") {
    result = number1 * number2;
    console.log(result);
}
else if (operator === "/" && number2 !== 0) {
    result = number1 / number2;
    console.log(result);
}
else {
    document.write("Ce n'est pas possible");
}


if(isNaN(result) === false) {
    document.write(`${number1} ${operator} ${number2} est égal à ${result}`);
}