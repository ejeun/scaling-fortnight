import React from 'react';
import { connect } from 'react-redux';

import ArrowForwardIcon from 'material-ui/svg-icons/navigation/arrow-forward';
import ArrowBackIcon from 'material-ui/svg-icons/navigation/arrow-back';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';

import SignaturePad from 'react-signature-pad';


/* -----------------    COMPONENT     ------------------ */

class Signature extends React.Component {

  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        <h2>Please sign below</h2>
        <Paper  zDepth={1}>
          <SignaturePad clearButton="true" />
        </Paper>
      </div>
    )
  }
}


/* -----------------    CONTAINER     ------------------ */

const mapState = () => ({});
const mapDispatch = () => ({});
export default connect(mapState, mapDispatch)(Signature);
