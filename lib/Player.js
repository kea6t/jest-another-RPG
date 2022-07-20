const Potion = require('../lib/Potion');

function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
    this.inventory = [new Potion('health'), new Potion()];
}

// return an object with various player properties
Player.prototype.getStats = function () {
    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    };
};

// returns the inventory array of false if empty
Player.prototype.getInventory = function () {
    if (this.inventory.length) {
        return this.inventory;
    } else {
        return false;
    };
}

// returns the health of the player
Player.prototype.getHealth = function () {
    return `${this.name}'s health is now ${this.health}!`;
}

// check player's condition whether alive or not
Player.prototype.isAlive = function () {
    if (this.health === 0) {
        return false;
    } else {
        return true;
    };
}

// check player's reduceHealth
Player.prototype.reduceHealth = function (health) {
    this.health -= health;

    if (this.health < 0) {
        this.health = 0;
    }
};



module.exports = Player;