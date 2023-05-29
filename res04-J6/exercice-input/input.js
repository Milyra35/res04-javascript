class Request {
    #input1;
    #input2;
    
    constructor (input1, input2) {
        this.#input1 = input1;
        this.#input2 = input2;
    }
    get input1() {
        return this.#input1;
    }
    set input1(input1) {
        this.#input1 = input1;
    }
    
    get input2() {
        return this.#input2;
    }
    set input2(input2) {
        this.#input2 = input2;
    }
    
    // Méthode pour récupérer les inputs
    getInputs() 
    {
        console.log(input1, input2);
    }
    
    
}

export{Request};