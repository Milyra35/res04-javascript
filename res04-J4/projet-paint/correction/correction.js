function initGrid(rows = 10, cols = 10)
{
    console.log(`rows : ${rows} cols ${cols}`);
    sessionStorage.setItem("grid-rows", rows);
    sessionStorage.setItem("grid-cols", cols);

    let scene = document.getElementById("scene");
    scene.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    scene.innerHTML = "";

    // create 10 rows
    for(let i = 0; i < rows; i++)
    {
        let row = document.createElement("section");
        row.id = `row-${i}`;
        row.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

        // create 10 cols
        for(let j = 0; j < cols; j++)
        {
            let col = document.createElement("section");
            col.id = `col-${i}-${j}`;
            row.appendChild(col);
        }

        scene.appendChild(row);
    }
}

function initBoxesListeners()
{
    let boxes = document.querySelectorAll("#scene > section > section");

    for(box of boxes)
    {
        box.addEventListener("click", function(event){
           console.log(event.target);
            for(let i = 0; i < boxes.length; i++)
            {
                boxes[i].classList.remove("selected");
            }
            event.target.classList.toggle("selected");
            console.log(sessionStorage.getItem("fillColor"));
            event.target.style.backgroundColor = `${sessionStorage.getItem("fillColor")}`;
        });
    }
}

function initColorChoice()
{
    let picker = document.getElementById("color-picker-fill");

    picker.addEventListener("change", function(event){
       sessionStorage.setItem("fillColor", event.target.value);
       let eraser = document.getElementById("eraser");
       if(eraser.classList.contains("selected"))
       {
           eraser.classList.remove("selected");
       }
    });
}

function initGridSizeListener()
{
    let gridSizeInputs = document.getElementsByClassName("grid-size");

    for(input of gridSizeInputs)
    {
        let rowsInput = document.getElementById("grid-rows");
        let colsInput = document.getElementById("grid-cols");

        input.addEventListener("change", function(){
            let rows = rowsInput.value;
            let cols = colsInput.value;
            initGrid(rows, cols);
        })
    }
}

function initEraser()
{
    let eraser = document.getElementById("eraser");
    eraser.addEventListener("click", function(event){
        event.target.classList.toggle("selected");
        sessionStorage.setItem("fillColor", "transparent");
    });
}

function initBucket()
{
    let bucket = document.getElementById("bucket");
    let boxes = document.querySelectorAll("#scene > section > section");

    bucket.addEventListener("click", function(){
       for(box of boxes)
       {
           box.style.backgroundColor = `${sessionStorage.getItem("fillColor")}`;
       }
    });
}

function getRectangleBoxes(width = 2, height = 2, posY = 0, posX = 0)
{
    let boxes = [];
    let maxHeight = parseInt(sessionStorage.getItem("grid-rows"));
    let maxWidth = parseInt(sessionStorage.getItem("grid-cols"));
    let i = posY;

    while((i < (posY + height)) && (i < maxHeight))
    {
        let j = posX;
        while((j < (posX + width)) && (j < maxWidth))
        {
            let box = document.getElementById(`col-${i}-${j}`);
            boxes.push(box);
            j++;
        }

        i++;
    }

    return boxes;
}

function drawRectangle(width = 2, height = 2, posY = 0, posX = 0, color = "black")
{
    let boxes = getRectangleBoxes(width, height, posY, posX);

    for(box of boxes)
    {
        box.style.backgroundColor = `${color}`;
    }
}

function initRectangle()
{
    let rectBtn = document.getElementById("add-square");

    rectBtn.addEventListener("click", function(){
       let width = parseInt(document.getElementById("square-width").value);
       let height = parseInt(document.getElementById("square-height").value);
       let posY = parseInt(document.getElementById("square-pos-y").value);
       let posX = parseInt(document.getElementById("square-pos-x").value);
       let color = document.getElementById("square-color").value;

       drawRectangle(width, height, posY, posX, color);
    });
}

function getTriangleBoxes(height = 2, posY = 0, posX = 1)
{
    let boxes = [];
    let maxHeight = parseInt(sessionStorage.getItem("grid-rows"));
    let maxWidth = parseInt(sessionStorage.getItem("grid-cols"));
    let i = posY + 1;

    while((i < posY + height) && (i < maxHeight))
    {
        let j = posX;
        let baseWidth = 1 + ((i - posY) * 2);

        console.log(`baseWidth : ${baseWidth}`);

        while((j <= (posX + (baseWidth / 2)) && j < maxWidth))
        {
            let box = document.getElementById(`col-${i}-${j}`);
            boxes.push(box);
            j++;
        }
        console.log("after going right");
        console.log(boxes);
        let k = posX - 1;
        while(k > (posX - (baseWidth / 2)) && k >= 0)
        {
            let box = document.getElementById(`col-${i}-${k}`);
            boxes.push(box);
            k--;
        }

        let box = document.getElementById(`col-${i}-${posX}`);
        boxes.push(box);

        i++;
    }

    let box = document.getElementById(`col-${posY}-${posX}`);
    boxes.push(box);

    return boxes;
}

function drawTriangle(height = 2, posY = 0, posX = 1, color = "black")
{
    let boxes = getTriangleBoxes(height, posY, posX);

    console.log(boxes);

    for(box of boxes)
    {
        box.style.backgroundColor = `${color}`;
    }
}

function initTriangle()
{
    let triangleBtn = document.getElementById("add-triangle");

    triangleBtn.addEventListener("click", function(){
       let height = parseInt(document.getElementById("triangle-height").value);
       let posY = parseInt(document.getElementById("triangle-pos-y").value);
       let posX = parseInt(document.getElementById("triangle-pos-x").value);
       let color = document.getElementById("triangle-color").value;

       drawTriangle(height, posY, posX, color);
    });
}

function initAsideMenu()
{
    let shapesBtn = document.getElementById("shapes");
    let textBtn = document.getElementById("text");

    shapesBtn.addEventListener("click", function(){
        let shapesMenu = document.getElementById("shapes-menu");
        let textMenu = document.getElementById("text-menu");
        shapesMenu.style.display = "grid";
        textMenu.style.display = "none";
    });

    textBtn.addEventListener("click", function(){
        let shapesMenu = document.getElementById("shapes-menu");
        let textMenu = document.getElementById("text-menu");
        shapesMenu.style.display = "none";
        textMenu.style.display = "grid";
    });
}

function initTextButtons()
{
    let btns = document.getElementsByClassName("text-button");

    for(btn of btns)
    {
        btn.addEventListener("click", function(event){
           event.target.classList.toggle("selected");
        });
    }

    btns = document.getElementsByClassName("text-align-button");

    for (btn of btns)
    {
        btn.addEventListener("click", function(event){
           for(let i = 0; i < btns.length; i++)
           {
               btns[i].classList.remove("selected");
           }

           event.target.classList.add("selected");
        });
    }
}

function initText()
{
    initTextButtons();

    let addText = document.getElementById("add-text");
    addText.addEventListener("click", function(){

       let bold = document.getElementById("text-bold").classList.contains("selected");
       let italic = document.getElementById("text-italic").classList.contains("selected");
       let underline = document.getElementById("text-underline").classList.contains("selected");
       let right = document.getElementById("text-right").classList.contains("selected");
       let center = document.getElementById("text-center").classList.contains("selected");
       let left = document.getElementById("text-left").classList.contains("selected");
       let content = document.getElementById("text-content").value;
       let posY = parseInt(document.getElementById("text-pos-y").value);
       let posX = parseInt(document.getElementById("text-pos-x").value);
       let box = document.getElementById(`col-${posY}-${posX}`);

       let p = document.createElement("p");
       let pText = document.createTextNode(content);
       p.appendChild(pText);

       if(bold === true)
       {
           p.classList.add("bold");
       }

        if(italic === true)
        {
            p.classList.add("italic");
        }

        if(underline === true)
        {
            p.classList.add("underline");
        }

        if(right === true)
        {
            p.classList.add("right");
        }

        if(center === true)
        {
            p.classList.add("center");
        }

        if(left === true)
        {
            p.classList.add("left");
        }

        box.appendChild(p);
    });
}

window.addEventListener("DOMContentLoaded", function(){
   initGrid();
   initBoxesListeners();
   initColorChoice();
   initGridSizeListener();
   initEraser();
   initBucket();
   initAsideMenu();
   initRectangle();
   initTriangle();
   initText();
});