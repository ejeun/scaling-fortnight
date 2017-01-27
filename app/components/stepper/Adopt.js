import React from 'react';

import TextField from 'material-ui/TextField';


/* -----------------    COMPONENT     ------------------ */

export default (props) => {
  return (
    <div className="">
      <h2>A few important questions...</h2>

          <div>
            <TextField
              name="color"
              floatingLabelText="Favorite color?"
              onChange={props.answers.handleColor}
            /><br />
            <br />
            <TextField
              name="food"
              floatingLabelText="Best dish you can cook?"
              onChange={props.answers.handleDish}
            /><br />
            <br />
            <TextField
              name="cat"
              floatingLabelText="Do you love cats?"
              onChange={props.answers.handleLove}
            /><br />
            <br />
            <TextField
              name="experience"
              floatingLabelText="How many years experience do you have talking to cats?"
              type="password"
              onChange={props.answers.handleExp}
              multiLine={true}
              rows={2}
            /><br />
            <br />
{/*                  <RaisedButton type="submit" value="signUp" label="Sign Up" disabled={this.state.disabled} labelStyle={{color: 'white'}}/>*/}
          </div>

    </div>
  )
}
