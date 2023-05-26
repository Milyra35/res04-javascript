window.addEventListener("DOMContentLoaded", function(){
    // ex1();
    // ex2();
    // ex3();
    // ex4();
    // ex5();
    ex7();
});

// EXERCICE 1
function ex1() {
    let numbers = [12, 33, 56, 77, 48, 76, 29];
    for(let i=0; i<numbers.length; i++) {
        if(numbers[i] % 2 === 0) {
            numbers[i] = numbers[i] + 1;
        }
        else {
            numbers[i] = numbers[i] - 1;
        }
        console.log(numbers[i]);
    }
}

// EXERCICE 2
function ex2() {
    let mixed = [34, 657, 38, 56, 90, 24, 98, 103, 934];
    let newTable = [];
    
    for(let i=0; i<mixed.length; i++) {
        if(mixed[i] % 2 === 0) {
            newTable.push(mixed[i]);
        }
    }
    console.log(newTable);
}

// EXERCICE 3
function ex3() {
    let names = [
        [
            "Barack",
            "Joe",
            "Hillary"
        ],
        [
            "Obama",
            "Biden",
            "Clinton"
        ]
    ];
    let newNames = [];
    
    for(let i=0; i<names.length + 1; i++) {
        newNames.push(names[0][i]+(names[1][i])); 
    }
    console.log(newNames);
}

// EXERCICE 4
function ex4() {
    let numbers = [123, 32, 56, 43, 28, 97, 16, 845, 67, 34];
    let words = ["Tartampion", "Carabistouille", "MÃ©chanisme", "Vote", "Ã‰limination", "Scrogneugneu", "Gaffe", "Alambic"];
    console.log(Math.max(...numbers));
    
    let actualWord = words[0].length;
    
    for(let i=1; i<words.length; i++) {
        if(words[i].length < actualWord) {
            actualWord = words[i];
        }
    }
    console.log(actualWord);
}

// EXERCICE 5
function ex5() {
    let numbers = [34, 56, 456, 28, 42, 543, 846, 432, 33, 806, 92, 11, 37];
    for (let i=0; i<numbers.length; i++) {
        // Déclarer variable pour dire celle qui est en cours
        let actualNumber = numbers[i];
        // Deuxième variable pour différencier de i(celui qui est en cours)
        let j = i - 1;
        
        // Boucle pour comparer avec le nombre i actuel
        while (j >=0 && numbers[j] > actualNumber) {
            numbers[j + 1] = numbers[j];
            j--;
        }
        
        numbers[j + 1] = actualNumber;
    }
    console.log(numbers);
    return numbers;
}

// EXERCICE 7
function ex7() {
    let map1 = [
        ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
        ["0", "1", "0", "0", "0", "0", "0", "0", "0", "0"],
        ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
        ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
        ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
        ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
        ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
        ["0", "0", "0", "0", "0", "0", "2", "0", "0", "0"],
        ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
        ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]
    ];
    
    // let map1 = [
    //     ["1", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    //     ["0", "0", "0", "0", "2", "0", "0", "0", "0", "0"],
    //     ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    //     ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    //     ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    //     ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    //     ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    //     ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    //     ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    //     ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]
    // ];
    
    // let stringOne = map1[1][1];
    // let stringTwo = map1[7][6];
    // console.log(stringOne); // Vérifier si je l'ai bien récupéré
    // map1[7].splice(5, 1, stringOne); // Le rentrer en dur pour voir comment ça fonctionne
    
    
    // Trouver les coordonnées du 1 et du 2
    let stringOne = "1";
    let stringTwo = "2";
    let ligne1;
    let ligne2;
    let colonne1;
    let colonne2;
    
    for(let i=0; i<map1.length; i++) {
        
        for(let j=0; j<map1[i].length; j++) {
            // console.log(map1[i][j]);
            if(map1[i][j] === "1") {
                ligne1 = i;
                colonne1 = j;
            }
            else if (map1[i][j] === "2") {
                ligne2 = i;
                colonne2 = j;
            }
            // stringOne = map1[i][j];
            // stringTwo = map1[i][j];
            
            // if(stringOne === "1") {
            //     stringOne = ;
            //     console.log(stringOne);
            // }
            // else if (stringTwo === "2") {
            //     stringTwo = "two";
            //     console.log(stringTwo);
            // }
        }
    }
    // console.log(ligne1, colonne1);
    // console.log(ligne2, colonne2);
    
    let nouvelleLigne = ligne1;
    let nouvelleColonne = colonne1;
    
    let enMouvement = true;
    while(enMouvement) {
    
        if (ligne1 === ligne2) {
            //Déplacer vers la droite ou la gauche
            
            if (colonne1 < colonne2) { 
                //Déplacer vers la droite
                nouvelleColonne = colonne1 + 1;
            }
            else if (colonne1 > colonne2) {
                // Déplacer vers la gauche
                nouvelleColonne = colonne1 - 1;
            }
            else {
                // Point d'arrêt car sur point 2
                enMouvement = false;
            }
        }
        
        else if (ligne1 < ligne2) {
            // Déplacer vers le bas ou diagonal bas/gauche/droite
            
            if (colonne1 === colonne2) {
                //Déplacer vers le bas
                nouvelleLigne = ligne1 + 1;
            }
            else if (colonne1 < colonne2) {
                // Déplacer vers la droite
                nouvelleLigne = ligne1 + 1;
                nouvelleColonne = colonne1 + 1;
            }
            else {
                // Déplacer vers la gauche
                nouvelleLigne = ligne1 + 1;
                nouvelleColonne = colonne1 - 1;
            }
        }
        
        else if (ligne1 > ligne2) {
            // Déplacer vers le haut ou diagonal haut/gauche/droite
            
            if (colonne1 === colonne2) {
                // Déplacer vers le haut
                nouvelleLigne = ligne1 - 1;
            }
            else if (colonne1 < colonne2) {
                // Déplacer vers la droite
                nouvelleLigne = ligne1 - 1;
                nouvelleColonne = colonne1 + 1;
            }
            else {
                // Déplacer vers la gauche
                nouvelleLigne = ligne1 - 1;
                nouvelleColonne = colonne1 - 1;
            }
        }
        if (nouvelleColonne === colonne2 && nouvelleLigne === ligne2) {
            
        }
        else {
            map1[ligne1][colonne1] = "0";
            map1[nouvelleLigne][nouvelleColonne] = "1";
        }
        
        ligne1 = nouvelleLigne;
        colonne1 = nouvelleColonne;
        
        console.log(ligne1, colonne1);
        console.log(map1);
    }
    
    
}