/**** EXERCICE 1 ****/
let student = {
    firstName : "Marie",
    age : 29,
    average : [12, 15, 14]
}
console.log(student.firstName);
console.log(student.age);
for (let i=0; i<student.average.length; i++) {
    console.log(student.average[i]);
}


/**** EXERCICE 2 ****/
let student2 = {
    name : "Steven",
    age : 19,
    grades : [12, 14, 8],
    average : 0
};

let average = student2.average;
let sum = 0;
for (let i = 0; i<student2.grades.length; i++) {
    sum = sum + student2.grades[i];
    average = sum / 3;
}
console.log(average);


/**** EXERCICE 3 ****/
let students = [
    {
        name : "Steven",
        age : 18,
        average : 10
    },
    {
        name : "Jessica",
        age : 20,
        average : 13
    },
    {
        name : "Charlie",
        age : 17,
        average : 12
    },
];

for (let i = 0; i<students.length; i++) {
    console.log(students[i].name);
    console.log(students[i].age);
    console.log(students[i].average);
}