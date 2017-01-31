import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/FlatButton';

import {login, logout} from 'APP/app/reducers/auth';

/* -----------------    COMPONENT     ------------------ */

class Navbar extends Component {

  constructor(props) {
    super(props)
  }

  guest(){
    return (
      <div className="signup-login">
        <Button
          label="signup"
          labelStyle={{color:'white'}}
          containerElement={<Link to={'signup'} />}
        />
        <Button
          label="login"
          labelStyle={{color:'white'}}
          containerElement={<Link to={'login'} />}
        />
      </div>
    )
  }

  user(){
    return(
      <div className="logged-in">
        <Button
          label="faq"
          labelStyle={{color:'white'}}
          containerElement={<Link to={'about'} />} />
      </div>
    )
  }

  render() {
    return (
      <AppBar
        title='Sphinx'
        iconElementRight={
          <div className="navbar-btns">
            {this.props.user.email ? this.user() : this.guest()}
          </div>
        }
      />
    )
  }
}


/* -----------------    CONTAINER     ------------------ */

const mapState = state => {
  return {
    user: state.auth
  }
};

const mapDispatch = dispatch => {
  return {
    login: (user, pw) => {
      dispatch(login(user, pw))
    },
    logout: () => {
      dispatch(logout())
    }
  }
};

export default connect(mapState, mapDispatch)(Navbar);
