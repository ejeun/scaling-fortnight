
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Sphinx from './Sphinx';
import Riddle from './Riddle';
import Inf from './Inf';
import {addImage} from '../reducers/riddle';


class SphinxContainer extends Component {

  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div className="home">
        <div className="chat">
          <Riddle
            //hard-code props until we set up the database
            currentRiddle={"What is the creature that walks on four legs in the morning, two legs at noon and three in the evening?"}
            solution={["human", "man", "person"]}
            guessed={this.props.guessed}
            guessedCorrectly={this.props.guessedCorrectly}
            images={this.props.images}
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
    images: state.riddle.images
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchAddImage (image) {
      return dispatch(addImage(image));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SphinxContainer);

