const express = require('express');
const json = require('body-parser').json();

const Dogs = require('./dog.service');
const People = require('../people/people.service');

const router = express.Router();

router.get('/', (req, res) => {
  return res.json(Dogs.get());
});

router.delete('/', json, (req, res) => {
  const person = People.dequeue();
  const dog = Dogs.dequeue();
  return res
    .status(200)
    .json({ person, dog });
});

module.exports = router;
