import {Weapon} from './weapon.js';

class Axe extends Weapon {
    #slashDamages;
    
    constructor(name, hand, damages, slashDamages) {
        super(name, hand, damages);
        this.#slashDamages = slashDamages;
    }
    
    get slashDamages() {
        return this.#slashDamages;
    }
    set slashDamages(slashDamages) {
        this.#slashDamages = slashDamages;
    }
}

export {Axe};