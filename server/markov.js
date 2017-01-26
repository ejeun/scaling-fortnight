'use strict'
var fs = require('fs');


module.exports = require('express').Router()
	.post('/', (req, res, next) => {
    console.log("helloooo")
		fs.writeFile("aliceMarkov.json", req.body)
  })