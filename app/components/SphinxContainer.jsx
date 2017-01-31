
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Sphinx from './Sphinx';
import Riddle from './Riddle';
import {addImage,updateGuessed} from '../reducers/riddle';


class SphinxContainer extends Component {

  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div className="home">
        <div className="chat">
          <Riddle
            currentRiddle={this.props.currentRiddle}
            solution={this.props.solution}
            guessed={this.props.guessed}
            guessedCorrectly={this.props.guessedCorrectly}
            images={this.props.images}
            feedback={this.props.feedback}
            dispatchUpdateGuessed={this.props.dispatchUpdateGuessed}
          />
        </div>
        <div className="cat">
          <Sphinx />
        </div>
      </div>
    )
  }
}


/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = state => {
  return {
    currentRiddle: state.riddle.currentRiddle,
    solution: state.riddle.solution,
    guessed: state.riddle.guessed,
    guessedCorrectly: state.riddle.guessedCorrectly,
    images: state.riddle.images,
    feedback: state.riddle.feedback
  };
};

const mapDispatchToProps = (dispatch) => {
  return ({
    dispatchAddImage (image) {
      return dispatch(addImage(image));
    },
    dispatchUpdateGuessed (tags) {
      return dispatch(updateGuessed(tags));
    }

  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SphinxContainer);

