class Character {
    #helmet;
    #axe;
    #shield;
    #sword;
    
    constructor() {
        this.#helmet = false;
        this.#axe = false;
        this.#shield = false;
        this.#sword = false;
    }
    
    get helmet() {
        return this.#helmet;
    }
    set helmet(helmet) {
        this.#helmet = helmet;
        this.render();
    }
    
    get axe() {
        return this.#axe;
    }
    set axe(axe) {
        this.#axe = axe;
        this.render();
    }
    
    get shield() {
        return this.#shield;
    }
    set shield(shield) {
        this.#shield = shield;
        this.render();
    }
    
    get sword() {
        return this.#sword;
    }
    set sword(sword) {
        this.#sword = sword;
        this.render();
    }
    
    render() {
        // Retrieve the right sections to put the images on
        let shieldArea = document.getElementById("left");
        let helmetArea = document.getElementById("center");
        let weaponArea = document.getElementById("right");
        
        if(this.#shield !== false)
        {
            shieldArea.classList.add("shield");
        }
        else 
        {
            shieldArea.classList.remove("shield");
        }
        
        if(this.#helmet !== false)
        {
            helmetArea.classList.add("helmet");
        }
        else 
        {
            helmetArea.classList.remove("helmet");
        }
        
        if(this.#axe !== false) 
        {
            weaponArea.classList.remove("sword");
            weaponArea.classList.add("axe");
        }
        else
        {
            weaponArea.classList.remove("axe");
        }
        
        if(this.#sword !== false) 
        {
            weaponArea.classList.remove("axe");
            weaponArea.classList.add("sword");
        }
        else 
        {
            weaponArea.classList.remove("sword");
        }
    }
}

export {Character};