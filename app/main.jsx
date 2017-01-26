'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import store from './store'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import ImageAPI from './components/ImageAPI'
import Signup from './components/Signup'
// import Adopt from './components/Adopt'
import Home from './components/Home'
import Welcome from './components/Welcome'
import App from './components/App'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="/welcome" component={Welcome} />
          <Route path="/signup" component={Signup} />
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/images" component={ImageAPI} />
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
)
