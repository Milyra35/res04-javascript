function createGrid(rows, cols) {
    let scene = document.getElementById("scene");
    scene.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    
    
    for (let i=0; i<rows; i++) {
        let row = document.createElement("div");
        row.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
        
        for (let j=0; j<cols; j++) {
            let col = document.createElement("div");
            col.id = `box${i}${j}`;
            row.appendChild(col);
            col.classList.add("dotted-border");
        }
        scene.appendChild(row);
    }
}

function selectBox() {
    let boxes = document.querySelectorAll("main > div div");
    
    for (box of boxes) {
        
        box.addEventListener("click", function(event) {
            for (let otherBox of boxes) {
                otherBox.classList.remove("selected");
            }
            let click = event.target;
            click.classList.toggle("selected");
        });
    }
}


function changeColor() {
    let colors = document.querySelector("header menu input");
    
    colors.addEventListener("change", function(event) {
        let click = event.target.value;
        sessionStorage.setItem("color", click);
        console.log(click);
    });
    
    
    let boxes = document.querySelectorAll("main > div div");
    
    for (box of boxes) {
        box.addEventListener("click", function(event) {
            let actualColor = sessionStorage.getItem("color");
            let click = event.target;
            click.style.backgroundColor = actualColor;
        });
    }
}




window.addEventListener("DOMContentLoaded", function(){
    createGrid(30, 30);
    selectBox();
    changeColor();
});