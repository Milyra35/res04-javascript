let choice = window.prompt("Choisissez un nombre entre 0 et 100");
let number = 34;



if (choice > number || choice < number) {
    while (choice !== number) {
        
        if (choice > number) {
            window.alert("C'est moins !");
            choice=window.prompt("Nouvel essai:");
        }
        else if (choice < number) {
            window.alert("C'est plus !");
            choice=window.prompt("Nouvel essai:");
        }
        else {
            window.alert("C'est gagné !");
            break;
        }
    }
}
else {
    window.alert("C'est gagné !");
}



