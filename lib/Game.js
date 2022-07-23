const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');

function Game () {
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentEnemy;
    this.player;

}

Game.prototype.initializeGame = function () {
    this.enemies.push(new Enemy('Goblin', 'Sword'));
    this.enemies.push(new Enemy('Orc', 'Baseball bat'));
    this.enemies.push(new Enemy('Skeleton', 'Axe'));

    this.currentEnemy = this.enemies[0];

    inquirer
    .prompt({
        type: 'text',
        name: 'name',
        message: 'What is your name?'
    })
    .then(({name}) => {
        this.player = new Player(name);

        // test the object creation
        this.startNewBattle();
    })
};

module.exports = Game;