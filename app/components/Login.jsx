//Boilerplate to be revised.

import React from 'react';

import TextField from 'material-ui/TextField';
import Button from 'material-ui/RaisedButton';


export const Login = ({ login }) => (
  <div style={style.container}>
    <form style={style.form} onSubmit={evt => {
      evt.preventDefault()
      login(evt.target.username.value, evt.target.password.value)
    } }>
      <br />
      <TextField
        hintText="email"
        name="username"
      />
      <br />
      <TextField
        hintText="password"
        name="password"
        type="password"
      />
      <br />
      <Button 
        label="login"
        name="submit"
        type="submit"
        style={style.button}
      />

    </form>
  </div>
)

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  {login}
) (Login)

const style = {
  button : {
    margin: 20
  },
  title : {
    fontFamily : "Roboto, sans-serif",
    color : "#57D5FF"
  },
  container : {
    textAlign : "center",
    paddingTop : "5%"
  },
  form : {
    width: '50%',
    height: '50%',
    marginLeft: '25%',
    paddingTop : '5px'
  }
};
