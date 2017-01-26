import React from 'react';
import { connect } from 'react-redux';

import ArrowForwardIcon from 'material-ui/svg-icons/navigation/arrow-forward';
import ArrowBackIcon from 'material-ui/svg-icons/navigation/arrow-back';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';


/* -----------------    COMPONENT     ------------------ */

class Signature extends React.Component {

  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div>
        <div className="signature-body">
          <canvas></canvas>
        </div>
        <div className="signature-footer">
          <RaisedButton label="Clear" style={{marginRight: 12}} />
          <RaisedButton label="Save" primary={true} />
        </div>
      </div>
    )
  }
}


/* -----------------    CONTAINER     ------------------ */

const mapState = () => ({});
const mapDispatch = () => ({});
export default connect(mapState, mapDispatch)(Signature);
