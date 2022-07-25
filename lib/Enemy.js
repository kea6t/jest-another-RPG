const Potion = require('./Potion');
const Character = require('../lib/Character');

class Enemy extends Character {
    constructor(name, weapon) {
        super(name);
        
        this.weapon = weapon;
        this.potion = new Potion();

    }

    // // Inherit prototype from Character
    // Enemy.prototype = Object.create(Character.prototype);

    // returns the name and weapon of the enemy
    getDescription() {
        return `A ${this.name} holding a ${this.weapon} has appeared!`;
    };
}

module.exports = Enemy;