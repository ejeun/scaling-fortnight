'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const {resolve} = require('path')
const passport = require('passport')
const PrettyError = require('pretty-error')

const User = require('APP/db/models/user')
import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyDD_3DoA6O902VqaQ-cjDO4benjjQ-eO1M",
    authDomain: "sphinx-65be3.firebaseapp.com",
    databaseURL: "https://sphinx-65be3.firebaseio.com",
    storageBucket: "sphinx-65be3.appspot.com",
};
firebase.initializeApp(config);
const db = firebase.database();

// Bones has a symlink from node_modules/APP to the root of the app.
// That means that we can require paths relative to the app root by
// saying require('APP/whatever').
//
// This next line requires our root index.js:
const pkg = require('APP')

const app = express()

if (!pkg.isProduction && !pkg.isTesting) {
  // Logging middleware (dev only)
  app.use(require('volleyball'))
}

// Pretty error prints errors all pretty.
const prettyError = new PrettyError();

// Skip events.js and http.js and similar core node files.
prettyError.skipNodeFiles()

// Skip all the trace lines about express' core and sub-modules.
prettyError.skipPackage('express')

module.exports = app
  // We'll store the whole session in a cookie
  .use(require('cookie-session') ({
    name: 'session',
    keys: [process.env.SESSION_SECRET || 'an insecure secret key'],
  }))

  // Body parsing middleware
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())

  // Authentication middleware
  .use(passport.initialize())
  .use(passport.session())

  // Create anonymous user in db & link to session
  .use((req, res, next) => {
    if(!req.session.userId) {
      
    //   User.create()
    //   .then(newUser => {
    //     console.log("new user created");
    //     req.session.userId = newUser.id
    //   })
    //   .then(() => next())
    //   .catch(console.log("user not created sucessfully"));
    // } else {
    //   next();
    }  
  })

  // Serve static files from ../public
  .use(express.static(resolve(__dirname, '..', 'public')))

  // Serve our api
  .use('/api', require('./api'))

  // Send index.html for anything else.
  .get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html')))

  .use((err, req, res, next) => {
    console.log(prettyError.render(err))
    console.log(err.stack)
    res.status(res.statusCode || 500).send(err)
    next()
  })

if (module === require.main) {
  // Start listening only if we're the main module.
  //
  // https://nodejs.org/api/modules.html#modules_accessing_the_main_module
  const server = app.listen(
    process.env.PORT || 1337,
    () => {
      console.log(`--- Started HTTP Server for ${pkg.name} ---`)
      console.log(`Listening on ${JSON.stringify(server.address())}`)
    }
  )
}
