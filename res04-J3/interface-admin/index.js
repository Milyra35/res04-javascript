let users = [  
    {  
        id: 0,  
        isActive: false,  
        age: 24,    
        name: "Marsh Obrien" 
    },  
    {  
        id: 1,  
        isActive: false,  
        age: 21,    
        name: "Rios Gibson" 
    },  
    {  
        id: 2,  
        isActive: false,  
        age: 29,  
        name: "Morgan Buchanan"
    },  
    {  
        id: 3,  
        isActive: true,  
        age: 25,    
        name: "Franklin Dyer" 
    },  
    {  
        id: 4,  
        isActive: false,  
        age: 30, 
        name: "Keller Pitts" 
    },  
    {  
        id: 5,  
        isActive: false,  
        age: 25,  
        name: "Davenport Maddox"  
    },  
    {  
        id: 6,  
        isActive: true,  
        age: 31,  
        name: "Judith Graves"
    },  
    {  
        id: 7,  
        isActive: true,  
        age: 26,  
        name: "Hoffman Hess" 
    },  
    {  
        id: 8,  
        isActive: true,  
        age: 22,  
        name: "Sheena Goff"
    },  
    {  
        id: 9,  
        isActive: false,  
        age: 39,  
        name: "Rose Lawrence" 
    }  
];

function openOrCloseNav() {
    let titleClick = document.querySelectorAll("aside nav h2");
    
    
    for (let i=0; i<titleClick.length; i++) {
        titleClick[i].addEventListener("click", function(event) {
            let title = event.target;
            let data = title.getAttribute("data-nav");
            let navToHide = document.querySelector("ul[data-nav = "+ data +" ]");
            
            navToHide.classList.toggle("close");
            
            console.log(title);
        });
    }
}

function openAside() {
    let clickAside = document.getElementById("click-aside");
    
    clickAside.addEventListener("click", function() {
        let header = document.querySelector("body header section:first-of-type");
        header.classList.toggle("close");
        let nav = document.querySelector("main aside");
        nav.classList.toggle("close");
        
        // We need the section to take all the space when aside is closed
        let sections = document.querySelectorAll("main section")
            for (section of sections) {
                if (nav.classList.contains("close")) {
                    section.style.gridColumn = "1/3";
                }
                else {
                    section.style.gridColumn = "";
                }
            }
    });
}

function listUsers() {
    // Get tbody to insert elements in it
    let tbody = document.querySelector("main section section:nth-of-type(2) table tbody");
    
    if(tbody) {
        for (user of users) {
        // Create tr 
        let tr = document.createElement("tr");
        
        // Create tds (we need 5 of them) and create text within it
        let tdIndex = document.createElement("td");
        let Index = document.createTextNode(user.id);
        tdIndex.appendChild(Index);
        tr.appendChild(tdIndex);
        
        let tdName = document.createElement("td");
        let name = document.createTextNode(user.name);
        tdName.appendChild(name);
        tr.appendChild(tdName);
        
        let tdAge = document.createElement("td");
        let age = document.createTextNode(user.age);
        tdAge.appendChild(age);
        tr.appendChild(tdAge);
        
        let tdActive = document.createElement("td");
        let active = document.createElement("span");
        
        // Condition if the user is active or not
        if (user.isActive === true) {
            active.classList.add("bi-person-fill-up");
        }
        else {
            active.classList.add("bi-person-fill-down");
        }
        // And we push the result into the tr
        tdActive.appendChild(active);
        tr.appendChild(tdActive);
        
        // For the last td, we have to create 3 elements in it (2 a and 1 button with a span in it)
        let tdAction = document.createElement("td");
        let eye = document.createElement("a");
        let eyeIcon = document.createElement("span");
        eyeIcon.classList.add("bi-eye");
        eye.appendChild(eyeIcon);
        tdAction.appendChild(eye);
        
        let pen = document.createElement("a");
        let penIcon = document.createElement("span");
        penIcon.classList.add("bi-pen");
        pen.appendChild(penIcon);
        tdAction.appendChild(pen);
        
        let trash = document.createElement("button");
        let trashIcon = document.createElement("span");
        trashIcon.classList.add("bi-trash3");
        trash.appendChild(trashIcon);
        tdAction.appendChild(trash);
        
        tr.appendChild(tdAction);
        
        // Not forget to add the tr to the tbody
        tbody.appendChild(tr);
        }
    }
}


function openModal() {
    // We want to open a modal when we click on the trash bin
    let btnDeleteUser = document.querySelectorAll("section table tbody tr td button");
    let modalDelete = document.getElementById("modal-delete");
    
    btnDeleteUser.addEventListener("click", function(event) {
       modalDelete.classList.toggle("open"); 
    });
}


function modalDelete() {
    
}




window.addEventListener("DOMContentLoaded", function(){
    openOrCloseNav();
    openAside();
    listUsers();
});