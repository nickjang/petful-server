const Queue = require('../queue/Queue');
const store = require('../store');
const Cats = require('../cat/cat.service');
const Dogs = require('../dog/dog.service');

let people;

module.exports = {
  get () {
    people = new Queue();
    store.people.forEach(person => people.enqueue(person));
    Cats.reset();
    Dogs.reset();
    return people.all();
  },

  enqueue(person) {
    people.enqueue(person);
    return person;
  },

  dequeue() {
    return people.dequeue();
  }
};
