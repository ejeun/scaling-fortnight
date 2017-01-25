'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import store from './store'

import Login from './components/Login'
import Signup from './components/Signup'
import Adopt from './components/Adopt'
import Home from './components/Home'
import NotLoggedIn from './components/NotLoggedIn'

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/notloggedin" component={NotLoggedIn} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
