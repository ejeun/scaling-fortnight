'use strict'

const db = require('APP/db');
const Cat = db.model('cats');

module.exports = require('express').Router()

  .get('/', (req, res, next) => {
    Cat.findAll()
    .then(cats => res.json(cats))
    .catch(next)
  })

  .post('/', (req, res, next) => {
    console.log('cat routes been hit with ', req.body)
    Cat.create(req.body)
    .then(newCat => res.status(201).json(newCat))
    .catch(next)
  })

  .get('/:id', (req, res, next) =>
    Cat.findById(req.params.id)
    .then(selectedCat => res.json(selectedCat))
    .catch(next))

  .put('/:id', (req, res, next) => {
    console.log(req.params.id, req.body)

    Cat.update(req.body,  {
      where: {id: req.params.id},
      returning: true
    })
    .then(updatedData => {
      // in this case, updated is an array. the first element is the number of rows changed, 
      // and the second element is an array of the actual rows with the upadted info. therefore the below [1][0]
      let updatedCat = updatedData[1][0];
      res.json(updatedCat)
    .catch(next)
    })

  });
