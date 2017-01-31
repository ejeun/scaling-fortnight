'use strict'
import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {render} from 'react-dom';
import {connect, Provider} from 'react-redux';
import axios from 'axios';

import store from './store';

import App from './components/App';
import Welcome from './components/Welcome';

import Signup from './components/Signup';
import Login from './components/Login';

import CatContainer from './components/CatContainer';
import ImageAPI from './components/ImageAPI';
import Chat from './components/Chat';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import {anonLogin} from './reducers/auth'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// not sure if this should be here or in imageAPI
const onImagesEnter = () => {
  const user = store.getState().auth.user;
  console.log(user)
  if (!user) store.dispatch(anonLogin());
}

render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App} >
          <IndexRedirect to="/home" />
          <Route path="/home" component={Welcome} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/cat" component={CatContainer} />
          <Route path="/images" component={ImageAPI} onEnter={onImagesEnter}/>
          <Route path="/chat" component={Chat} />
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
)
