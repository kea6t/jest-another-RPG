
class Character {
    constructor(name = '') {
        this.name = name;

        this.health = Math.floor(Math.random() * 10 + 95);
        this.strength = Math.floor(Math.random() * 5 + 7);
        this.agility = Math.floor(Math.random() * 5 + 7);
    }

    // check character's condition whether alive or not
    isAlive() {
        if (this.health === 0) {
            return false;
        }
        return true;
    }

    // returns the health of the character
    getHealth() {
        return `${this.name}'s health is now ${this.health}`;
    }

    // returns the attack value for the character
    getAttackValue() {
        const min = this.strength - 5;
        const max = this.strength + 5;

        return Math.floor(Math.random() * (max - min) + min);
    }

    // check character's reduceHealth
    reduceHealth(health) {
        this.health -= health;

        if (this.health < 0) {
            this.health = 0;
        }
    }
}

module.exports = Character;

console.log(new Character().getHealth());
