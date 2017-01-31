import axios from 'axios';
import {browserHistory} from 'react-router';

const initialState = {
  user: null,
}

/* ------------       REDUCER     ------------------ */

const reducer = (state = initialState, action) => {
  switch(action.type) {
  case AUTHENTICATED:
    return action.user
  }
  return state
}

/* -----------------    ACTIONS     ------------------ */

const AUTHENTICATED = 'AUTHENTICATED'
const CREATE_USER = 'CREATE_USER';


/* ------------     ACTION CREATORS     ------------------ */

export const authenticated = user => ({
  type: AUTHENTICATED, user
})

/* ------------       DISPATCHERS     ------------------ */

// for anonymous login
// firebase.auth().signInAnonymously()

export const anonLogin = () =>
  dispatch =>
    firebase.auth().signInAnonymously()
      .catch(() => console.log("login failed"));

export const login = (email, password) =>
  dispatch =>
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => browserHistory.push('/'))
      .catch(() => console.log("login failed"));

export const logout = () =>
  dispatch =>
    firebase.auth().signOut()
    .then(() => browserHistory.push('/'))
    .catch(() => console.log("logout failed"));

export const whoami = () =>
  dispatch =>
    firebase.auth().onAuthStateChanged(
      user => dispatch(authenticated(user)),
      error => console.log(error))


export const signUp = (name, email, password) => {
  return dispatch => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => browserHistory.push('/'))
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    })
  }
}



/* ------------------  default export     ------------------ */

export default reducer;