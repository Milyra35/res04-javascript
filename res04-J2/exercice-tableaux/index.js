/**** EXERCICE 1 ****/
let animals = ["Dog", "Cat", "Panda", "Bat", "Snake", "Bear"];
for (let i=0; i < animals.length; i++) {
    console.log(animals[i]);
}

let gods = ["Zeus", "Persephone", "Dyonisos", "Artemis", "Ares"];
for (god of gods) {
    console.log(god);
}

/**** EXERCICE 2 ****/
let animals_even = ["Dog", "Cat", "Panda"];
let animals_odd = ["Bat", "Snake", "Bear"];

for (let i=0; i<animals_even.length; i++) {
    if (i%2 === 0) {
        console.log(animals_even[i]);
    }
}

for (let i=0; i<animals_odd.length; i++) {
    if ((i%2 === 0) === false) {
        console.log(animals_odd[i]);
    }
}


/**** EXERCICE 3 ****/
let numbers = [10, 11, 15, 6];
let sum = 0;

for (i=0; i<numbers.length; i++) {
    sum = sum + numbers[i];
}
console.log(sum);


/**** EXERCICE 4 ****/
let grades = [[20, 10], [15, 20], [13, 18]];
let average = 0;

for (let i=0; i<grades.length; i++) {
    average = (grades[i][0] + grades[i][1]) / 2;
    console.log(average);
}
