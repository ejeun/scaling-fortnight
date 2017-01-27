
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Cat from './Cat';
import ChatBox from './ChatBox';
import Inf from './Inf';
import {addMessage} from '../reducers/chat';


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

const mapState = () => ({});
const mapDispatch = () => ({});
export default connect(mapState, mapDispatch)(CatContainer);

