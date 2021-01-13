const express = require('express');
const json = require('body-parser').json();

const People = require('./people.service');

const router = express.Router();

router.get('/', (req, res) => {
  return res
    .status(200)
    .json({ people: People.get() });
});

router.post('/', json, (req, res) => {
  const name = req.body.name;

  if (!name) {
    return res
      .status(400)
      .json({ error: 'Missing \'name\' in body.' });
  } else {
    const person = People.enqueue(name);
    return res
      .status(200)
      .json({ person });
  }
});

module.exports = router;
