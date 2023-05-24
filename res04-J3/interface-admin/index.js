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
        let nav = document.querySelector("main aside");
        nav.classList.toggle("close");
    })
}




window.addEventListener("DOMContentLoaded", function(){
    openOrCloseNav();
    openAside();
});