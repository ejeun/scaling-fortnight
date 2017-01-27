import axios from 'axios';

const initialState = {
  messages: []
}

const reducer = (state=initialState, action) => {
  const newState = Object.assign({}, state);
  switch(action.type) {
    case ADD_MESSAGE:
      newState.messages = [...newState.messages, action.message];
      break;
    default:
      return newState;
  }
  return newState;
}

const ADD_MESSAGE = 'ADD_MESSAGE';
export const addMessage = message => ({
  type: ADD_MESSAGE, message
})

// export const saveMarkov = (markov) => {
//   return dispatch =>
//     axios.post('/api/markov',
//       markov)
//       .then(() => {})
//       .catch(() => {})
// }

export default reducer;
