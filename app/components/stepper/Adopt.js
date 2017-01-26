import React from 'react';
import { connect } from 'react-redux';

import ArrowForwardIcon from 'material-ui/svg-icons/navigation/arrow-forward';
import ArrowBackIcon from 'material-ui/svg-icons/navigation/arrow-back';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';


/* -----------------    COMPONENT     ------------------ */

class Adopt extends React.Component {

  constructor(props) {
    super(props)
  }


  render() {
    return(
      <div className="">
        <h2>A few important questions...</h2>
          <form onSubmit={this.handleSubmit}>
            <div>
              <TextField
                name="color"
                hintText="Color"
                floatingLabelText="Provide your favorite color"
                onChange={this.handleChangeName}
              /><br />
              <br />
              <TextField
                name="food"
                hintText="Food"
                floatingLabelText="Share the name of the best dish you can cook"
                onChange={this.handleChangeEmail}
              /><br />
              <br />
              <TextField
                name="cat"
                hintText="Cat"
                floatingLabelText="Describe your favorite quality of cats in one word"
                type="password"
                errorText={this.errorText}
                onChange={this.handleChangeConfirm}
              /><br />
              <br />
              <TextField
                name="experience"
                hintText="Experience"
                floatingLabelText="How many years experience do you have talking to cats?"
                type="password"
                onChange={this.handleChangePassword}
              /><br />
              <br />
{/*                  <RaisedButton type="submit" value="signUp" label="Sign Up" disabled={this.state.disabled} labelStyle={{color: 'white'}}/>*/}
            </div>
          </form>
      </div>)
   }
}


/* -----------------    CONTAINER     ------------------ */

const mapState = () => ({});
const mapDispatch = () => ({});
export default connect(mapState, mapDispatch)(Adopt);
