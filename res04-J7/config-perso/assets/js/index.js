import {Character} from './character.js';
import {Armor} from './armor.js';
import {Shield} from './shield.js';
import {Helmet} from './helmet.js';

import {Weapon} from './weapon.js';
import {Axe} from './axe.js';
import {Sword} from './sword.js';


window.addEventListener("DOMContentLoaded", function() {
    // Retrieve the right buttons to put a listener on it
    let helmetBtn = document.getElementById("helmet-btn");
    let shieldBtn = document.getElementById("shield-btn");
    let axeBtn = document.getElementById("axe-btn");
    let swordBtn = document.getElementById("sword-btn");
    
    let newCharacter = new Character();
    
    helmetBtn.addEventListener("click" , function(event) {
        if(newCharacter.helmet === false) 
        {
            let newHelmet = new Helmet();
            newCharacter.helmet = newHelmet;
            console.log(newCharacter);
        }
        else 
        {
            newCharacter.helmet = false;
            console.log(newCharacter);
        }
    });
    
    shieldBtn.addEventListener("click", function(event) {
        if(newCharacter.shield === false) 
        {
            let newShield = new Shield();
            newCharacter.shield = newShield;
            console.log(newCharacter);
        }
        else 
        {
            newCharacter.shield = false;
            console.log(newCharacter);
        }
    });
    
    axeBtn.addEventListener("click", function(event) {
        console.log(newCharacter.axe);
        if(newCharacter.axe === false)
        {
            let newAxe = new Axe();
            newCharacter.axe = newAxe;
            newCharacter.sword = false;
            console.log(newCharacter);
        }
        else 
        {
            newCharacter.axe = false;
            console.log(newCharacter);
        }
    });
    
    swordBtn.addEventListener("click", function(event) {
        console.log(newCharacter.sword);
        if(!newCharacter.sword)
        {
            newCharacter.sword = new Sword();
            newCharacter.axe = false;
            console.log(newCharacter);
        }
        else 
        {
            newCharacter.sword = false;
            console.log(newCharacter);
        }
    });
})

