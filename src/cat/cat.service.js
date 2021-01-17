const Queue = require('../queue/Queue');
const store = require('../store');

let cats;

module.exports = {
  reset() {
    cats = new Queue();
    store.cats.forEach(cat => cats.enqueue(cat));
  },

  get() {
    return cats.show();
  },

  dequeue() {
    return cats.dequeue();
  }
};
