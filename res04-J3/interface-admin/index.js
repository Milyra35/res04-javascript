function openOrCloseNav() {
    let titleClick = document.querySelectorAll("aside nav h2");
    
    
    for (let i=0; i<titleClick.length; i++) {
        titleClick[i].addEventListener("click", function(event) {
            let title = event.target;
            let navToHide = document.querySelectorAll("nav ul");
            
            for (nav of navToHide) {
                nav.classList.toggle("close");
            }
        });
        
    }
    return title;
}




window.addEventListener("DOMContentLoaded", function(){
    openOrCloseNav();
});