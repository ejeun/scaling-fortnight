
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Sphinx from './Sphinx';
import Riddle from './Riddle';
import Inf from './Inf';
import {addMessage} from '../reducers/chat';


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
            userTried={true}
            userGuessedCorrectly={true}
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
    messages: state.chat.messages
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchAddMessage (message) {
      return dispatch(addMessage(message));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SphinxContainer);

