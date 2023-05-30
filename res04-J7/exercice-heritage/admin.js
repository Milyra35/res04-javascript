import {User} from './user.js';

class Admin extends User {
    
    canEditArticles() {
        return true;
    }
}

export {Admin};