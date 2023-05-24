function exercice1()
{
    let btnChangeColor = document.getElementById("btn-change-color");
    let box1 = document.getElementById("box1");
    
    btnChangeColor.addEventListener("click", function(event) {
        box1.style.backgroundColor = "blue";
    });
}
exercice1();


function exercice2()
{
    let btnMove = document.getElementById("btn-move");
    let box2 = document.getElementById("box2");
    
    btnMove.addEventListener("click", function(event) {
        box2.classList.add("move");
    });
}
exercice2();


function exercice3()
{
    let ingredients = ["Salade", "Tomate", "Oignon"];
    let btnAddIngredients = document.getElementById("btn-add-ingredients");
    
    btnAddIngredients.addEventListener("click", function(event) {
        for (ingredient of ingredients) {
            let ul = document.querySelector("#ex3 ul");
            let li = document.createElement("li");
            ul.appendChild(li);
            let txt = document.createTextNode(ingredient);
            li.appendChild(txt);
        }
    });
}
exercice3();


function exercice4()
{
    let heroes = [
        {
            name : "Clark Kent",
            secret : "Superman"
        },
        {
            name : "Diana Prince",
            secret : "Wonder Woman"
        },
        {
            name : "Tony Stark",
            secret: "Iron Man"
        }
    ];
    let btnAddHero = document.getElementById("btn-add-hero");
    let x=0;
    
    btnAddHero.addEventListener("click", function(envent) {
        let tBody = document.querySelector("#ex4 table tbody");
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        tBody.appendChild(tr);
        tr.appendChild(td1);
        tr.appendChild(td2);
        let nameTxt = document.createTextNode(heroes[x].name);
        let identityTxt = document.createTextNode(heroes[x].secret);
        td1.appendChild(nameTxt);
        td2.appendChild(identityTxt);
        
        console.log(x);
        x++;
    });
}
exercice4();


function exercice5()
{
    let stageBox = document.getElementById("stage");
    let blueBox = document.getElementById("blue");
    let redBox = document.getElementById("red");
    let greenBox = document.getElementById("green");
    let btnTurn = document.getElementById("btn-turn");
    
    btnTurn.addEventListener("click", function(event) {
        blueBox.style.backgroundColor = "red";
        redBox.style.backgroundColor = "green";
        greenBox.style.backgroundColor = "blue";
    });
}
exercice5();


function exercice6()
{
    let btnRoll = document.getElementById("btn-roll");
    let ballRoll = document.getElementById("ball");
    
    btnRoll.addEventListener("click", function(event) {
        ballRoll.classList.add("roll");
    })
}
exercice6();