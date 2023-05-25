function createGrid(rows) {
    let scene = document.getElementById("scene");
    let row = document.createElement("div");
    
    for (let i=0; i<rows; i++) {
        let col = document.createElement("div");
        col.id = `box${i}`;
        scene.appendChild(col);
    }
}
createGrid(100);