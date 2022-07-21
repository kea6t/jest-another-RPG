const Potion = require('./Potion');

function Enemy(name, weapon) {
    this.name = name;
    this.weapon = weapon;
    this.potion = new Potion();

    this.health = Math.floor(Math.random() * 10 + 85);
    this.strength = Math.floor(Math.random() * 5 + 5);
    this.agility = Math.floor(Math.random() * 5 + 5);
}

// returns the health of the enemy
Enemy.prototype.getHealth = function () {
    return `${this.name}'s health is now ${this.health}!`;
}

// returns the name and weapon of the enemy
Enemy.prototype.getDescription = function () {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
};

// check enemy's condition whether alive or not
Enemy.prototype.isAlive = function () {
    if (this.health === 0) {
        return false;
    } else {
        return true;
    };
}

// Attack method for enemy
Enemy.prototype.getAttackValue = function () {
    const min = this.strength - 5;
    const max = this.strength + 5;

    return Math.floor(Math.random() * (max - min) + min );
}

// check enemy's reduceHealth
Enemy.prototype.reduceHealth = function (health) {
    this.health -= health;

    if (this.health < 0) {
        this.health = 0;
    }
};



module.exports = Enemy;