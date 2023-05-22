let firstName = window.prompt("Quel est votre prénom ?");
let name = window.prompt("Quel est votre nom ?");
let age = parseInt(window.prompt("Quel est votre âge ?"));
let confirm = window.confirm(`${firstName} ${name}, âgé-e de ${age} ans, confirmez-vous ces informations ?`);



if (confirm === true) {
    if (age < 13) {
        window.alert("Accès interdit");
        document.write(`${firstName} ${name}, vous n'avez pas accès au site`);
    }
    else if (age > 18) {
        window.alert("Accès autorisé");
        document.write(`${firstName} ${name}, vous avez accès au site`);
    }
    else {
        window.alert("Accès restreint");
        document.write(`${firstName} ${name}, vous avez partiellement accès au site`);
    }
}
else {
    console.error("Les informations n'ont pas été confirmées");
}