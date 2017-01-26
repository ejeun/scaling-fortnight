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

class CreateUser extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="">

              <h2>Sign Up</h2>
              <form onSubmit={this.handleSubmit}>
                <div>
                  <TextField
                    name="name"
                    hintText="Name"
                    floatingLabelText="Name"
                    onChange={this.handleChangeName}
                  /><br />
                  <br />
                  <TextField
                    name="email"
                    hintText="Email"
                    floatingLabelText="Email"
                    onChange={this.handleChangeEmail}
                  /><br />
                  <br />
                  <TextField
                    name="password"
                    hintText="Password"
                    floatingLabelText="Password"
                    type="password"
                    onChange={this.handleChangePassword}
                  /><br />
                  <br />
                  <TextField
                    name="passwordConfirm"
                    hintText="Confirm Password"
                    floatingLabelText="Confirm Password"
                    type="password"
                    errorText={this.errorText}
                    onChange={this.handleChangeConfirm}
                  /><br />
                  <br />
{/*                  <RaisedButton type="submit" value="signUp" label="Sign Up" disabled={this.state.disabled} labelStyle={{color: 'white'}}/>*/}
                </div>
              </form>
      </div>
    )
  }
}


/* -----------------    CONTAINER     ------------------ */

const mapState = () => ({});
const mapDispatch = () => ({});
export default connect(mapState, mapDispatch)(CreateUser);
