'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Cat = db.define('cats', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  dislikes: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: []
  },
  likes: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: []
  },
  // ???? technically TEXT is unlimited but should we store our chain like this?
  // - jenny
  markov: Sequelize.TEXT

});
