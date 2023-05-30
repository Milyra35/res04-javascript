import {User} from './user.js'
import {Admin} from './admin.js'

// let newName = new User("Marie", "Richir");
// let marie = newName.fullName();
// console.log(marie);

let newUser = new User("Marie", "Richir", "développeuse");
// let marie = newUser.fullName();
let newAdmin = new Admin("toto", "tata");
// let toto = newAdmin.canEditArticles();
console.log(newUser.job);
console.log(newAdmin.fullName());
console.log(newAdmin.canEditArticles());