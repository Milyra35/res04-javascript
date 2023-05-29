/* Exercice - Move Your Div

Déplacer une div sur quatre points cardinaux quand on clique un bouton.  
Quand la div revient à son point d'origine, un modal s'affiche.  
Le modal disparait lorsqu'on recommence le cycle.  
Un deuxième bouton doit servir à masquer le modal.

*/

window.addEventListener("DOMContentLoaded", function(){
    moveTheDiv();
});

function moveTheDiv() {
    let moveDiv = document.getElementById("moveDiv");
    let box = document.querySelector("body .container div");
    
    for (let i=0; i<4; i++) {
        moveDiv.addEventListener("click", function(event) {
            box.style.left = "400px";
        });
    }
}