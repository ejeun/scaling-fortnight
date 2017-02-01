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
      .then(() => browserHistory.push('/sphinx'))
      .catch(() => console.log("login failed"));

export const logout = () =>
  dispatch =>
    firebase.auth().signOut()
    .then(() => browserHistory.push('/'))
    .catch(() => console.log("logout failed"));

export const whoami = () =>
  dispatch =>
    firebase.auth().onAuthStateChanged(
      user => {
        if (user) dispatch(authenticated({...user}));
        else dispatch(anonLogin())
      },
      error => console.log(error))

// this will overwrite any user's info, not just anon ones, need to fix later
export const signUp = (name, email, password) => {
  return dispatch => {
    const user = firebase.auth().currentUser;
    user.updatePassword(password)
    .then(() => user.updateEmail(email))
    .then(() => user.updateProfile({displayName: name}))
    .then(() => {
      dispatch(authenticated({...user}));
      browserHistory.push('/sphinx');
    })

    .catch((error) => console.log(error))
  }
}




/* ------------------  default export     ------------------ */

export default reducer;
