const Enemy = require('../lib/Enemy.js');
const Potion = require('../lib/Potion.js');

jest.mock('../lib/Potion.js');

test('creates an enemy object', () => {
  const enemy = new Enemy('Goblin', 'Sword');

  expect(enemy.name).toBe('Goblin');
  expect(enemy.weapon).toBe('Sword');
  expect(enemy.health).toEqual(expect.any(Number));
  expect(enemy.strength).toEqual(expect.any(Number));
  expect(enemy.agility).toEqual(expect.any(Number));
  expect(enemy.potion).toEqual(expect.any(Object));

});


// test for Enemy's health
test("gets Enemy's health value", () => {
    const enemy = new Enemy('Goblin', 'Sword'); 

    expect(enemy.getHealth()).toEqual(expect.stringContaining(enemy.health.toString()));

});

// test for enemy's description
test("get's a description of the enemy", () => {
    const enemy = new Enemy('Goblin', 'Sword');

    expect(enemy.getDescription()).toEqual(expect.stringContaining('Goblin'));
    expect(enemy.getDescription()).toEqual(expect.stringContaining('Sword'));

});

// test for checking if Enemy is alive
test("Check if Enemy is alive or not", () => {
    const enemy = new Enemy('Goblin', 'Sword'); 

    expect(enemy.isAlive()).toBeTruthy();

    enemy.health = 0;

    expect(enemy.isAlive()).toBeFalsy();

});

// Test for enemy's attack value
test("gets enemy's attack value", () => {
    const enemy = new Enemy('Goblin', 'Sword');
    enemy.strength = 10;
  
    expect(enemy.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(enemy.getAttackValue()).toBeLessThanOrEqual(15);

  });

// test for subtracting from Enemy's health
test("subtracts from Enemy's health", () => {
    const enemy = new Enemy('Goblin', 'Sword'); 
    const oldHealth = enemy.health;

    enemy.reduceHealth(5);

    expect(enemy.health).toBe(oldHealth - 5);

    enemy.reduceHealth(99999);

    expect(enemy.health).toBe(0);

});
