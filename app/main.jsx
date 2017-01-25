'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import store from './store'

import Login from './components/Login'
import Signup from './components/Signup'
// import Adopt from './components/Adopt'
import Home from './components/Home'
import Welcome from './components/Welcome'
import App from './components/App'
import Chat from './components/Chat'

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/welcome" component={Welcome} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/chat" component={Chat} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
