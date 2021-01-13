const express = require('express');
const json = require('body-parser').json();

const Cats = require('./cat.service');
const People = require('../people/people.service');

const router = express.Router();

router.get('/', (req, res) => {
  return res.json(Cats.get());
});

router.delete('/', json, (req, res) => {
  const person = People.dequeue();
  console.log(person);
  const cat = Cats.dequeue();
  return res
    .status(200)
    .json({ person, cat });
});

module.exports = router;
