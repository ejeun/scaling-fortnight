
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Cat from './Cat';
import ChatBox from './ChatBox';
import Inf from './Inf';
import {addMessage} from '../reducers/chat';


/*
Be careful about your use of containers - why is this component necessary? Remember that connect itself creates a container. You could use connect in the chat component.
*/

class CatContainer extends Component {

  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props)
    return(
      <div className="home">
        <div className="chat">
          <ChatBox
            messages={this.props.messages}
            addMessage={this.props.dispatchAddMessage}
          />
        </div>
        <div className="cat">
          <Cat/>
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

export default connect(mapStateToProps, mapDispatchToProps)(CatContainer);

