class Weapon {
    #name;
    #hand;
    #damages;
    
    constructor(name, hand, damages) {
        this.#name = name;
        this.#hand = hand;
        this.#damages = damages;
    }
    
    get name() {
        return this.#name;
    }
    set name(name) {
        this.#name = name;
    }
    
    get hand() {
        return this.#hand;
    }
    set hand(hand) {
        this.#hand = hand;
    }
    
    get damages() {
        return this.#damages;
    }
    set damages(damages) {
        this.#damages = damages;
    }
}

export {Weapon};