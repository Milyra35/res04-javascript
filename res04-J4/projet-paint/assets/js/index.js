function createGrid(rows, cols) {
    let scene = document.getElementById("scene");
    scene.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    scene.innerHTML = "";
    
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
            click.classList.add("selected");
        });
    }
}

function changeRowsAndCols() {
    let changeRow = document.getElementById("change-row");
    let changeCol = document.getElementById("change-col");
    
    let scene = document.getElementById("scene");
    scene.innerHTML = "";
    
    changeRow.addEventListener("change", function(event) {
        let click = event.target.value;
        sessionStorage.setItem("number", click);
        console.log(click);
        let actualRow = parseInt(sessionStorage.getItem("number"));
        let actualCol = parseInt(sessionStorage.getItem("number"));
        createGrid(actualRow, actualCol);
        selectBox();
        changeColor();
    });
    
    changeCol.addEventListener("change", function(event) {
        let click = event.target.value;
        sessionStorage.setItem("number", click);
        console.log(click);
        let actualRow = parseInt(sessionStorage.getItem("number"));
        let actualCol = parseInt(sessionStorage.getItem("number"));
        createGrid(actualRow, actualCol);
        selectBox();
        changeColor();
    });
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


// function changeColor() {
//     let colors = document.querySelector("header menu input");
//     let eraserActive = false;
//     colors.addEventListener("change", function(event) {
//         let click = event.target.value;
//         sessionStorage.setItem("color", click);
//         console.log(click);
//     });
    
    
//     let boxes = document.querySelectorAll("main > div div");
    
//     for (box of boxes) {
//         box.addEventListener("click", function(event) {
//             let actualColor = sessionStorage.getItem("color");
//             let click = event.target;
//             let btnEraser = document.getElementById("btn-eraser");
            
//             btnEraser.addEventListener("click", function(event) {
//                 btnEraser = !eraserActive;
//                 if (eraserActive) {
//                 click.style.backgroundColor = actualColor;
//                 } 
//                 else {
//                     click.style.backgroundColor = "";
//                 }
//             });
            
//         });
//     }
// }

function eraser() {
    let btnEraser = document.getElementById("btn-eraser");
    let boxes = document.querySelectorAll("main > div div");
    let eraserActive = true;

    btnEraser.addEventListener("click", function(event) {
        btnEraser.classList.toggle("erase");
        for (box of boxes) {
            box.addEventListener("click", function(event) {
                let eraseBox = event.target;
                eraseBox.classList.add("erase-box");
                console.log(eraseBox);
            });
        }
    });
}




function bucketPaint() {
    let btnBucket = document.getElementById("btn-color-all");
    let colors = document.querySelector("header menu input");
    let scene = document.getElementById("scene");
    
    colors.addEventListener("change", function(event) {
        let click = event.target.value;
        sessionStorage.setItem("color", click);
        
        btnBucket.addEventListener("click", function(event) {
            let chosenColor = sessionStorage.getItem("color");
            scene.style.backgroundColor = chosenColor;
        });
    });
}


window.addEventListener("DOMContentLoaded", function(){
    createGrid();
    selectBox();
    changeColor();
    changeRowsAndCols();
    bucketPaint();
});