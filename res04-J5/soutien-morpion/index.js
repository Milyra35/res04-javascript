function gameGrid() {
    let body = document.getElementById("body");
    let cells = document.querySelectorAll("body div");
    let players = ["X", "O"];
    let turn = 0;
    let gameIsOver = false;
    
}


// function gameGrid() {
//     let body = document.getElementById("body");
    
//     for (let i=0; i<grid.length; i++) {
//         for (let j=0; j<grid[i].length; j++) {
//             let cell = document.createElement("div");
//             cell.id = `cell${i}-${j}`;
//             body.appendChild(cell);
//         }
//     }
    
//     let cells = document.querySelectorAll("body div");
    
//     for (cell of cells) {
//         cell.addEventListener("click", function(event) {
//             for (otherCell of cells) {
//                 otherCell.style.border = "1px dashed black";   
//             }
//             let click = event.target;
//             click.style.border = "1px solid black";
//             // let playerOne = document.createTextNode("X");
//             // click.appendChild(playerOne);
//         });
//     }
// }

// function game() {
//     let grid = [
//         ["", "", ""],
//         ["", "", ""],
//         ["", "", ""]
//     ];
//     let playerOne = "X";
//     let playerTwo = "O";
//     let line1;
//     let col1;
//     let line2;
//     let col2;
    
//     for(let i=0; i<grid.length; i++) {
        
//         for(let j=0; j<grid[i].length; j++) {
//             if(grid[i][j] === playerOne) {
//                 line1 = i;
//                 col1 = j;
//             }
//             else if(grid[i][j] === playerTwo) {
//                 line2 = i;
//                 col2 = j;
//             }
//         }
//     }
    
//     let newLine = line1;
//     let newCol = col1;
//     // playerOne = grid[line1][col1];
//     let newLine2 = line2;
//     let newCol2 = col2;
//     // playerTwo = grid[line2][col2];
    
//     let playerTurn = false;
    
//     for(let i=0; i<grid.length; i++) {
//         for(let j=0; j<grid[i].length; j++) {
//             let click = event.target;
//             if(playerTurn) {
//                 click.innerText(playerOne);
//             }
//             else {
//                 click.innerText(playerTwo);
//             }
//         }
//     }
    
// }









