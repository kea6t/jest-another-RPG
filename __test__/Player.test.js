const Player = require('../lib/Player.js');
const Potion = require('../lib/Potion.js');

jest.mock('../lib/Potion.js');

// test for creating player's object
test('creates a player object', () => {
  const player = new Player('Dave');

  expect(player.name).toBe('Dave');
  expect(player.health).toEqual(expect.any(Number));
  expect(player.strength).toEqual(expect.any(Number));
  expect(player.agility).toEqual(expect.any(Number));

  expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)]));
});

// test for getting player's stats
test("gets player's stats as an object", () => {
  const player = new Player('Dave');

  expect(player.getStats()).toHaveProperty('potions');
  expect(player.getStats()).toHaveProperty('health');
  expect(player.getStats()).toHaveProperty('strength');
  expect(player.getStats()).toHaveProperty('agility');
});

// test for getting player's inventory 
test('gets inventory from player or returns false', () => {
  const player = new Player('Dave');

  expect(player.getInventory()).toEqual(expect.any(Array));

  player.inventory = [];

  expect(player.getInventory()).toEqual(false);
});

// test for player's health
test("gets player's health value", () => {
    const player = new Player('Dave'); 

    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));

});

// test for checking if player is alive
test("Check if player is alive or not", () => {
    const player = new Player('Dave'); 

    expect(player.isAlive()).toBeTruthy();

    player.health = 0;

    expect(player.isAlive()).toBeFalsy();

});

// test for subtracting from player's health
test("subtracts from player's health", () => {
    const player = new Player('Dave'); 
    const oldHealth = player.health;

    player.reduceHealth(5);

    expect(player.health).toBe(oldHealth - 5);

    player.reduceHealth(99999);

    expect(player.health).toBe(0);

});

// test for getting player's attack value
test("gets player's attack value", () => {
    const player = new Player('Dave'); 
    player.strength = 10;

    expect(player.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(player.getAttackValue()).toBeLessThanOrEqual(15);

});

//  test for adding potion to player's inventory
test("adds potion to the inventory", () => {
    const player = new Player('Dave'); 
    const oldCount = player.inventory.length;

    player.addPotion(new Potion());

    expect(player.inventory.length).toBeGreaterThan(oldCount);

});

//  test for using a potion to player's inventory
test("uses a potion from inventory", () => {
    const player = new Player('Dave'); 
    player.inventory = [new Potion(), new Potion(), new Potion()];
    const oldCount = player.inventory.length;

    player.usePotion(1);

    expect(player.inventory.length).toBeLessThan(oldCount);
});