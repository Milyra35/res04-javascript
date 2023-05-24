let numbers = [-23,42,21,90,54,362,-12,57,78,84,35,546,128,7,15,65,28];


function sortNumbers(numbers) {
    for (let i=0; i<numbers.length; i++) {
        // Déclarer variable pour dire celle qui est en cours
        let actualNumber = numbers[i];
        // Deuxième variable pour différencier de i
        let j = i - 1;
        
        // Boucle pour comparer avec le nombre i actuel
        while (j >=0 && numbers[j] > actualNumber) {
            numbers[j + 1] = numbers[j];
            j--;
        }
        
        numbers[j + 1] = actualNumber;
    }
    
    return numbers;
}
console.log(sortNumbers(numbers));



// function sortNumbers(numbers) {
//     //Nouveau tableau pour injecter les valeurs dans l'ordre dedans
//     let newNumbers = [];
//     //boucle pour parcourir le tableau
//     for (let i=0; i<numbers.length; i++) {
//         //condition pour savoir si c'est plus petit ou plus grand que celui d'avant
//         if (numbers[i] < numbers[i+1]) {
//             newNumbers.splice(i-1, 0, numbers[i]);
//         }
//         else if (numbers[i] > numbers[i+1]) {
//             newNumbers.splice(i+1, 0, numbers[i]);
//         }
//         else {
//             newNumbers.push(numbers[i]);
//         }
//     }
//     return newNumbers;
// }

// console.log(sortNumbers(numbers));


