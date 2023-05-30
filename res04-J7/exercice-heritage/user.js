class User {
    #name;
    #firstName;
    
    constructor (name, firstName) {
        this.#name = name;
        this.#firstName = firstName;
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
        return this._job;
    }
    set job(job) {
        return (this._job = job);
    }
    
    fullName() {
        return `${this.#name} ${this.#firstName}`;
    }
}

export {User};