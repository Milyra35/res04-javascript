window.addEventListener("DOMContentLoaded", function(){
    showTimes();
    showNumbers();
});

// EXERCICE 1
let timeOut = setTimeout(function() {
    alert("Hello World !");
}, 4200);


// EXERCICE 2
let intervalId = setInterval(function(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let secondes = date.getSeconds();
    document.write(`${hours}h${minutes}min${secondes}s <br>`);
}, 4200);


//EXERCICE 3
function showTimes() {
    let times = [1, 2, 3];
    let index = 0;
    
    // let firstTimeOut = setTimeout(function() {
    //     console.log(times[0]);
    // }, times[0]*1000);
    // let secondTimeOut = setTimeout(function() {
    //     console.log(times[1]);
    // }, times[1]*2000);
    // let thirdTimeOut = setTimeout(function() {
    //     console.log(times[2]);
    // }, times[2]*3000);
    
    setTimeout(function() {
        console.log(times[0]);
        setTimeout(function() {
            console.log(times[1]);
            setTimeout(function() {
                console.log(times[2]);
            }, times[2]*1000);
        }, times[1]*1000);
    }, times[0]*1000);
}


// EXERCICE 4
function showNumbers() {
    let numbers = [32, 43, 56, 24, 78, 42];
    let i = 0;
    
    let setIntervalNumbers = setInterval(function() {
        if(i === numbers.length - 1) {
            clearInterval(setIntervalNumbers);
        }
        console.log(numbers[i++]);
    }, 1000);
}
