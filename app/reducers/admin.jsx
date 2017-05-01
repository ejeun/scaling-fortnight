import axios from 'axios'

const initialState = {
  allUsers: [],
}

/* ------------       REDUCER     ------------------ */

const reducer = (state = initialState, action) => {

  switch(action.type) {
    case INITIALIZE_USERS:
      return action.allUsers
  }

  return state
}

/* -----------------    ACTIONS     ------------------ */

const INITIALIZE_USERS = 'INITIALIZE_USERS';
const CREATE_USER = 'CREATE_USER';



/* ------------     ACTION CREATORS     ------------------ */
// export const initUser = users => ({
//   type: INITIALIZE_USERS,
//   loading: true,
//   users
// })

// export const createUser = user => ({
//   type: CREATE_USER,
//   loading: true,
//   user
// })

export const initUser = allUsers => ({
  type: INITIALIZE_USERS,
  loading: true,
  allUsers
})

/* ------------       DISPATCHERS     ------------------ */

export const fetchUsers = () => {
  return dispatch => {
    return axios.get('/api/admin')
    .then(res => dispatch(initUser(res.data)))
    .catch(console.error)
  }
}

export const addUser = newUser => {
  return dispatch => {
    return axios.post('/api/admin', newUser)
    .then(() => dispatch(fetchUsers()))
    .then(res => dispatch(initUser(res.data)))
    .catch(err => console.error(`Creating user: ${newUser} unsuccesful`, err))
  }
}

/* ------------------  default export     ------------------ */

export default reducer;