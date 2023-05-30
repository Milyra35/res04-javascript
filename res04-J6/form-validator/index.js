import {User} from './user.js';

window.addEventListener("DOMContentLoaded", function() {
    // console.log(user);
    newUser();
})

function newUser() {
    let submit = document.getElementById("submit");
    
    submit.addEventListener("click", function(event) {
        event.preventDefault();
        
        let lastName = document.getElementById("lastname").value;
        let firstName = document.getElementById("firstname").value;
        let nickName = document.getElementById("nickname").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("password-confirm").value;
        let bio = document.getElementById("bio").value;
        
        let user = new User(lastName, firstName, nickName, email, password, confirmPassword, bio);
        console.log(user);
        user.validate();
    });
}