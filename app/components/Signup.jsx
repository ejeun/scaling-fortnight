//I intend this to be boilerplate that we revise for our project. It's copied from Grace Shopper.

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Col, Form, FormGroup, FormControl,
         ControlLabel, HelpBlock, Button } from 'react-bootstrap'

import { addUser } from '../action-creators/user';

/* -----------------    COMPONENT     ------------------ */

class Signup extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirm: ''
    }
    this.handleInput = this.handleInput.bind(this)
    this.onSignupSubmit = this.onSignupSubmit.bind(this)
    this.getValidationState = this.getValidationState.bind(this)
  }

  getValidationState(inputType) {
    function isCapitalized(word) {
      const upperCase = /[A-Z]/g
      const wordFirstLetter = word.charAt(0)

      if (upperCase.test( wordFirstLetter )) return true
      return false
    }

    if (inputType === 'name' && this.state.name.length) {
      if (this.state.name.length === 0) return 'error'
      if (!isCapitalized(this.state.name)) return 'warning'
      else return 'success'
    }

    if (inputType === 'email' && this.state.email.length) {
      if (this.state.email.length < 5) return 'error'
      else return 'success'
    }

    if (inputType === 'password' && this.state.password.length) {
      if (this.state.password.length < 8) return 'error'
      else return 'success'
    }

    if (inputType === 'passwordConfirm' && this.state.passwordConfirm) {
      if (this.state.passwordConfirm !== this.state.password) return 'error'
      else return 'success'
    }
    return null
  }

  handleInput(event) {
    let target = event.target.id,
        newVal = {}
    newVal[target] = event.target.value
    this.setState(newVal)
  }

  onSignupSubmit(event) {
    event.preventDefault()
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }
    this.props.signup(newUser)
  }

  render() {
    // const { message } = this.props (for OAUTH)
    return (
      <div>
        <Col xs={12} sm={12} md={6} lg={6} className="signup">
          <h2>Create An Account</h2>
          <Form onSubmit={this.onSignupSubmit}>
            <FormGroup
              controlId="name"
              validationState={this.getValidationState('name')}>
              <ControlLabel>name</ControlLabel>
              <FormControl
                value={this.state.name}
                type="name"
                placeholder="Enter Your Name"
                onChange={this.handleInput} />
              <HelpBlock>
                { this.getValidationState('name') === 'warning' ?
                'Name must be capitalized' : 'Please enter your name.' }
              </HelpBlock>
            </FormGroup>
            <FormGroup
              controlId="email"
              validationState={this.getValidationState('email')}>
              <ControlLabel>email</ControlLabel>
              <FormControl
                value={this.state.email}
                type="email"
                placeholder="Enter Your Email"
                onChange={this.handleInput} />
              <HelpBlock>
                { this.getValidationState('email') === 'error' ?
                  'A valid email is required.' : 'Please enter a your email.' }
              </HelpBlock>
            </FormGroup>
            <FormGroup
              controlId="password"
              validationState={this.getValidationState('password')}>
              <ControlLabel>password</ControlLabel>
              <FormControl
                value={this.state.password}
                type="password"
                placeholder="Enter a Password"
                onChange={this.handleInput} />
              <FormControl.Feedback />
              <HelpBlock>
                { this.getValidationState('password') === 'error' ?
                  'Password is must be at least 8 characters.' : 'Please enter a password.' }
              </HelpBlock>
            </FormGroup>
            <FormGroup
              controlId="passwordConfirm"
              validationState={this.getValidationState('passwordConfirm')}>
              <ControlLabel>password confirmation</ControlLabel>
              <FormControl
                value={this.state.passwordConfirm}
                type="password"
                placeholder="Confirm Your Password"
                onChange={this.handleInput} />
              <FormControl.Feedback />
              <HelpBlock>
                { this.getValidationState('passwordConfirm') === 'error' ?
                  'Password must match.' : 'Please confirm your password' }
              </HelpBlock>
            </FormGroup>
            <Button type="submit">Signup</Button>
          </Form>
        </Col>
        </div>
      )
   }
}

/*Signup.propTypes = {
  dispatch: PropTypes.func.isRequired
}*/

/* -----------------    CONTAINER     ------------------ */

const mapState = () => ({ message: 'Sign up' });
const mapDispatch = { signup: addUser }

export default connect(mapState, mapDispatch)(Signup);
