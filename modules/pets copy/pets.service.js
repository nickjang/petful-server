const Queue = require('../queue/Queue');
const store = require('../../src/store');

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
};

store.cats.forEach(cat => pets.cats.enqueue(cat));
store.dogs.forEach(dog => pets.dogs.enqueue(dog));

// --------------------

module.exports = {
  get() {
    return {
      cat: pets.cats.show(),
      dog: pets.dogs.show()
    };
  },

  dequeue(type) {
    return pets[type].dequeue();
  }
};
