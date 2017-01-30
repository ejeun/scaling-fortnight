import axios from 'axios'

const initialState = {
  user: {},
}

/* ------------       REDUCER     ------------------ */

const reducer = (state = initialState, action) => {

  const newState = Object.assign({}, state);

  switch(action.type) {

  case SET_USER:
    newState.user = action.user;
    break;

  }

  return newState
}

/* -----------------    ACTIONS     ------------------ */

const INITIALIZE_USERS = 'INITIALIZE_USERS';
const CREATE_USER = 'CREATE_USER';
const SET_USER = 'SET_USER';


/* ------------     ACTION CREATORS     ------------------ */
// export const initUser = users => ({
//   type: INITIALIZE_USERS,
//   loading: true,
//   users
// })

export const createUser = user => ({
  type: CREATE_USER,
  loading: true,
  user
})

export const setUser = user => ({
  type: SET_USER,
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

/* ------------------  default export     ------------------ */

export default reducer;