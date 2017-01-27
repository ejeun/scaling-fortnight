import axios from 'axios'

/* ------------       REDUCER     ------------------ */
/*
const reducer = (state=null, action) => {
  switch(action.type) {
  case AUTHENTICATED:
    return action.user
  }
  return state
}*/

/* -----------------    ACTIONS     ------------------ */

export const INITIALIZE_USERS = 'INITIALIZE_USERS'
export const CREATE_USER = 'CREATE_USER'


/* ------------     ACTION CREATORS     ------------------ */
export const initUser = users => ({
  type: INITIALIZE_USERS,
  loading: true,
  users
})

export const createUser = user => ({
  type: CREATE_USER,
  loading: true,
  user
})

/* ------------       DISPATCHERS     ------------------ */

export const fetchUsers = () => {
  return dispatch => {
    return axios.get('/api/users')
    .then(res => dispatch(initUser(res.data)))
    .catch(console.error)
  }
}

export const addUser = newUser => {
  return dispatch => {
    return axios.post('/api/users', newUser)
    .then(res => dispatch(createUser(res.data)))
    .catch(err => console.error(`Creating user: ${newUser} unsuccesful`, err))
  }
}
