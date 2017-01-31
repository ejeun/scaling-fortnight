import axios from 'axios';

const initialState = {
  //hard-code currentRiddle and solution until we hook these up to DB.
  currentRiddle: "What is the creature that walks on four legs in the morning, two legs at noon and three in the evening?",
  solution: ["human", "man", "person"],
  guessed: false,
  guessedCorrectly: false,
  feedback: '',
  images: []

}

const reducer = (state=initialState, action) => {

  switch(action.type) {

    case ADD_IMAGE:
      return Object.assign({}, state, {images: [...state.images, action.image]})
      break;

    case GUESSED:
      if (action.tags) {
        for (let i = 0; i < action.tags.length; i ++) {
          if (state.solution.includes(action.tags[i])) {
            return Object.assign({}, state, {guessedCorrectly: true, guessed: true, feedback: "Correct!"});
          }
        }
        return Object.assign({}, state, {guessed: true, feedback: "Incorrect!"})
      }
      break;

    default:
      return state;
  }
}

const ADD_IMAGE = 'ADD_IMAGE';
const GUESSED = 'GUESSED';

export const addImage = image => ({
  type: ADD_IMAGE, image
})

export const updateGuessed = tags => ({
  type: GUESSED, tags
})

export default reducer;
