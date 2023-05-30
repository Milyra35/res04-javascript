class User {
    #name;
    #firstName;
    #job;
    
    constructor (name, firstName, job) {
        this.#name = name;
        this.#firstName = firstName;
        this.#job = job;
    }
    
    get name() {
        return this.#name;
    }
    set name(name) {
        this.#name = name;
    }
    
    get firstname() {
        return this.#firstName;
    }
    set firstName(firstName) {
        this.#firstName = firstName;
    }
    
    get job() {
        return this.#job;
    }
    set job(job) {
        this.#job = job;
    }
    
    fullName() {
        return `${this.#name} ${this.#firstName}`;
    }
}

export {User};