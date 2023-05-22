/**** EXERCICE 1 ****/
let i = 0;
while (i<11) {
    console.log(i);
    i = i + 1;
}

let x = 25;
while (x>19) {
    console.log(x);
    x = x - 1;
}

let y = 0;
while (y<21) {
    console.log(y);
    y = y + 2;
}


/**** EXERCICE 2 ****/
let a = 0;
while (a <= 10) {
    console.log(a);
    a = a + 1;
    
    if (a % 2) {
        console.log("Pair");
    }
    else {
        console.log("Impair");
    }
}


/**** EXERCICE 3 ****/
let b = 0;
while (b <= 100) {
    
    if (b < 50 && b%2 === 0) {
        console.log(b + "Pair");
        b = b + 2;
    }
    else {
        console.log(b);
        b = b + 3;
        
        if (b>=50 && b%2 === 0) {
            console.log("Pair");
        }
        else {
            console.log("Impair");
        }
    }
}    