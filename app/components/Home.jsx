
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Cat from './Cat';


/* -----------------    COMPONENT     ------------------ */

class Home extends Component {

  constructor(props) {
    super(props)
  }


  render() {
    return(
      <div>
        <div className="chat">
          <img src="http://r.ddmcdn.com/s_f/o_1/cx_633/cy_0/cw_1725/ch_1725/w_720/APL/uploads/2014/11/too-cute-doggone-it-video-playlist.jpg"></img>
        </div>

        <div className="cat">
          <Cat />
        </div>

      </div>)
   }
}


/* -----------------    CONTAINER     ------------------ */

const mapState = () => ({});
const mapDispatch = () => ({});
export default connect(mapState, mapDispatch)(Home);
