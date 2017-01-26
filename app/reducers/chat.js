import axios from 'axios'

const reducer = (state=null, action) => {
  return state
}

export const saveMarkov = (markov) => {
  console.log("please work")
  return dispatch =>
    axios.post('/api/markov',
      markov)
      .then(() => {})
      .catch(() => {})
}

export default reducer