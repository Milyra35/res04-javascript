import {Weapon} from './weapon.js';

class Sword extends Weapon {
    #pommelStrikeDamages;
    
    constructor(name, hand, damages, pommelStrikeDamages) {
        super(name, hand, damages);
        this.#pommelStrikeDamages = pommelStrikeDamages;
    }
    
    get pommelStrikeDamages() {
        return this.#pommelStrikeDamages;
    }
    set pommelStrikeDamages(pommelStrikeDamages) {
        this.#pommelStrikeDamages = pommelStrikeDamages;
    }
}

export {Sword};