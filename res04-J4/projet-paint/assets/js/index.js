function createGrid(rows, cols) {
    let scene = document.getElementById("scene");
    
    
    for (let i=0; i<rows; i++) {
        let row = document.createElement("div");
        
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
            // box.classList.remove("selected");
            let click = event.target;
            click.classList.toggle("selected");
            
        });
    }
}




window.addEventListener("DOMContentLoaded", function(){
    createGrid(10, 10);
    selectBox();
});