
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Cat from './Cat';
import ChatBox from './ChatBox';


/* -----------------    COMPONENT     ------------------ */

class CatContainer extends Component {

  constructor(props) {
    super(props)
  }


  render() {
    return(
      <div className="home">
        <div className="chat">
          <ChatBox/>
        </div>

        <div className="cat">
          <Cat/>
        </div>

      </div>)
   }
}


/* -----------------    CONTAINER     ------------------ */

const mapState = () => ({});
const mapDispatch = () => ({});
export default connect(mapState, mapDispatch)(CatContainer);
