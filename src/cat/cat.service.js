const Queue = require('../queue/Queue');
const store = require('../store');

// Set up initial data.
// --------------------

const cats = new Queue();

store.cats.forEach(cat => cats.enqueue(cat));

// --------------------

module.exports = {
  get() {
    return cats.show();
  },

  dequeue() {
    return cats.dequeue();
  }
};
