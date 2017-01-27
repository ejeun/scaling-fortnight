//Boilerplate to be revised.

import React from 'react';

import TextField from 'material-ui/TextField';
import Button from 'material-ui/RaisedButton';


export const Login = ({ login }) => (
  <form onSubmit={evt => {
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
    />

  </form>
)

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  {login}
) (Login)
