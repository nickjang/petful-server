const Queue = require('../queue/Queue');
const store = require('../store');

let dogs;

module.exports = {
  reset() {
    dogs = new Queue();
    store.dogs.forEach(dog => dogs.enqueue(dog));
  },

  get() {
    return dogs.show();
  },

  dequeue() {
    return dogs.dequeue();
  }
};
