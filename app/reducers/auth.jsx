import axios from 'axios';
import {browserHistory} from 'react-router';

const initialState = {
  user: {},
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

export const login = (username, password) =>
  dispatch =>
    axios.post('/api/auth/local/login',
      {username, password})
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))      

export const logout = () =>
  dispatch =>
    axios.post('/api/auth/logout')
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))

export const whoami = () =>
  dispatch =>
    axios.get('/api/auth/whoami')
      .then(response => {
        const user = response.data
        dispatch(authenticated(user))
      })
      .catch(failed => dispatch(authenticated(null)))

export const signUp = (name, email, password) => {
  return dispatch => {
     axios.post('/api/auth/signUp', {name, email, password})
    .then(() => dispatch(login(email, password)))
    .then(() => dispatch(whoami()))
    .then(() => browserHistory.push('/'))
    .catch(err => console.error(`Creating user: ${newUser} unsuccesful`, err))
  }
}

// export const signUp = (name, email, password) =>
//   dispatch =>
//     axios.post('/api/auth/signUp', {name, email, password})
//       .then(() => {
//         dispatch(login(email, password))
//       })
//       .then(() => {
//         dispatch(whoami())
//       })
//       .then(() => {
//         browserHistory.push('/')
//       })
//       .catch(() => {
//         dispatch(whoami())
//       })


/* ------------------  default export     ------------------ */

export default reducer;