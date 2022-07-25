const Potion = require('../lib/Potion');
const Character = require('../lib/Character');

// Constructor for Player
class Player extends Character{
    constructor(name = '') {
        super(name);
        
        this.inventory = [new Potion('health'), new Potion()];
    }

    // // inherit prototype from Character
    // Player.prototype = Object.create(Character.prototype);

    // return an object with various player properties
    getStats() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    };

    // returns the inventory array of false if empty
    getInventory() {
        if (this.inventory.length) {
            return this.inventory;
        } else {
            return false;
        };
    }

    // add potion method for player
    addPotion(potion) {
        this.inventory.push(potion);
    };

    // check's player's inventory value of potions
    usePotion(index) {
        const potion = this.getInventory().splice(index, 1)[0];

        switch (potion.name) {
            case 'agility': this.agility += potion.value;
                break;

            case 'health': this.health += potion.value;
                break;

            case 'strength': this.strength += potion.value;
                break;
        }
    };
}




module.exports = Player;