let grid = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    
function gameGrid() {
    let body = document.getElementById("body");
    let cells = document.querySelectorAll("#body div");
    let players = ["X", "O"];
    let currentPlayer = players[0];
    let gameIsOver = false;
    
    
    for (let i=0; i<cells.length; i++) {
        // let cell = document.createElement("div");
        cells[i].id = `cell${Math.floor(i / 3)}-${i % 3}`;
        body.appendChild(cells[i]);
    }
    
    for (cell of cells) {
        cell.addEventListener("click", function(event) {
            for (otherCell of cells) {
                otherCell.style.border = "1px dashed black";   
            }
            let click = event.target;
            click.style.border = "1px solid black";
    
            if (!gameIsOver && event.target.innerHTML === "")
            {
                let row = parseInt(event.target.id.charAt(4));
                let col = parseInt(event.target.id.charAt(6));
                
                grid[row][col] = currentPlayer;
                event.target.innerHTML = currentPlayer;
    
                if (checkWin(currentPlayer)) 
                {
                    console.log(`Le joueur ${currentPlayer} a gagné !`);
                    gameIsOver = true;
                }
                else if (checkDraw())
                {
                    console.log("Match nul !");
                }
                else 
                {
                    //Change turn
                    currentPlayer = players[(players.indexOf(currentPlayer) +1) % 2];
                }
            }
        });
    }
}


function checkWin(player) {
    // Vérifier les combinaisons horizontales
    for (let i = 0; i < 3; i++) {
        if (grid[i][0] === player && grid[i][1] === player && grid[i][2] === player) {
          return true;
        }
    }
    
    // Vérifier les combinaisons verticales
    for (let i = 0; i < 3; i++) {
        if (grid[0][i] === player && grid[1][i] === player && grid[2][i] === player) {
          return true;
        }
    }
    
    // Vérifier les combinaisons diagonales
        if (
        (grid[0][0] === player && grid[1][1] === player && grid[2][2] === player) ||
        (grid[0][2] === player && grid[1][1] === player && grid[2][0] === player)
        ) {
            return true;
        }
    
    return false;
}

function checkDraw() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[i][j] === '') {
        return false;
      }
    }
  }
  
  return true;
}


gameGrid();








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









