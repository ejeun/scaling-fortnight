const initialState = {
  //hard-code currentRiddle and solution until we hook these up to DB.
  currentRiddle: "What is the creature that walks on four legs in the morning, two legs at noon and three in the evening?",
  solution: ["human", "man", "person"],
  guessed: false,
  guessedCorrectly: false,
  feedback: '',
  images: []

}

/* ------------       REDUCER     ------------------ */

const reducer = (state=initialState, action) => {

  switch(action.type) {

    case ADD_IMAGE:
      return Object.assign({}, state, {images: [...state.images, action.image]});
      break;

    case UPDATE_RIDDLE:
      let solution = Object.keys(action.riddle.solution).map(key => {return action.riddle.solution[key]});
      return Object.assign({}, state, {currentRiddle: action.riddle.question, solution: solution});
      break;

    case GUESSED:
      if (action.tags) {
        for (let i = 0; i < action.tags.length; i ++) {
          if (state.solution.includes(action.tags[i])) {
            return Object.assign({}, state, {guessedCorrectly: true, guessed: true, feedback: "Correct!"});
          }
        }
        return Object.assign({}, state, {guessed: true, feedback: "Incorrect!"});
      }
      break;

    default:
      return state;
  }
}

/* -----------------    ACTIONS     ------------------ */

const ADD_IMAGE = 'ADD_IMAGE';
const UPDATE_RIDDLE = 'UPDATE_RIDDLE';
const GUESSED = 'GUESSED';

/* ------------     ACTION CREATORS     ------------------ */

export const addImage = image => ({
  type: ADD_IMAGE, image
})

export const updateRiddle = riddle => ({
  type: UPDATE_RIDDLE, riddle
})

export const updateGuessed = tags => ({
  type: GUESSED, tags
})

/* ------------       DISPATCHERS     ------------------ */

export const getRiddle = (todayNum) => {
  return dispatch => {
    firebase.database().ref(`riddles/${todayNum}`).once('value')
    .then(res => {
      dispatch(updateRiddle(res.val()));
    })
  }
}

export default reducer;













