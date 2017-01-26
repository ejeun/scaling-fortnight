'use strict'
var fs = require('fs');


module.exports = require('express').Router()
	.post('/', (req, res, next) => {
		fs.writeFile("aliceMarkov.json", req.body)
  })