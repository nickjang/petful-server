const Queue = require('../queue/Queue');
const store = require('../store');

// Set up initial data.
// --------------------

const dogs = new Queue();

store.dogs.forEach(dog => dogs.enqueue(dog));

// --------------------

module.exports = {
  get() {
    return dogs.show();
  },

  dequeue() {
    return dogs.dequeue();
  }
};
