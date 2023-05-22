let choice = window.prompt("Choisissez un nombre entre 0 et 100");
let number = 34;



if (choice > number || choice < number) {
    while (choice !== number) {
        choice=window.prompt("Nouvel essai:");
        if (choice > number) {
            window.alert("C'est moins !");
        }
        else if (choice < number) {
            window.alert("C'est plus !");
        }
        else {
            window.alert("C'est gagné !");
        }
    }
}




/*while (choice !== number) {
    if (choice > 34) {
        window.alert("C'est moins !");
    }
    else if (choice < 34) {
        window.alert("C'est plus !");
    }
    else {
        window.alert("C'est gagné !");
    }
}*/
