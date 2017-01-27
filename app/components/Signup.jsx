import React from 'react';
import { connect } from 'react-redux';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';

import CreateUser from './stepper/CreateUser';
import Adopt from './stepper/Adopt';
import Signature from './stepper/Signature';

// import { addUser } from '../action-creators/user';

/* -----------------    COMPONENT     ------------------ */

class Signup extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      step: 0,
      finished: false,
      useraccount: {
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
      },
      paperwork: {
        color: '',
        food: '',
        cat: '',
        experience: '',
      },
      contract: {
        signature: false,
      },
    }
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNext() {
    const {step} = this.state;
    this.setState({
      step: step + 1,
      finished: step >= 2,
    });
  }

  handlePrev() {
    const {step} = this.state;
    if (step > 0) {
      this.setState({step: step - 1});
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const {step} = this.state;


  }

  getStepContent(step) {
    switch (step) {
      case 0:
        return <CreateUser user={this.state.useraccount}/>;
      case 1:
        return <Adopt answers={this.state.paperwork}/>;
      case 2:
        return <Signature />;
      default:
        return 'error';
    }
  }

  render() {
    const {step, finished} = this.state

    return (
      <div>
        <Stepper activeStep={step}>
          <Step>
            <StepLabel>Create user account</StepLabel>
          </Step>
          <Step>
            <StepLabel>Adoption paperwork</StepLabel>
          </Step>
          <Step>
            <StepLabel>Signature</StepLabel>
          </Step>
        </Stepper>
        <div style={{margin: '0 16px'}}>
          {finished ? (
            <div>
              success! you can login (not actually yet)
            </div>
          ) : (
            <form onSubmit={this.handleSubmit}>
              {this.getStepContent(step)}
              <div style={{marginTop: 12}}>
                <FlatButton
                  label="Back"
                  disabled={step === 0}
                  onTouchTap={this.handlePrev}
                  style={{marginRight: 12}}
                />
                <RaisedButton
                  type="submit"
                  label={step === 2 ? 'Finish' : 'Next'}
                  primary={true}
                  onTouchTap={this.handleNext}
                />
              </div>
            </form>
          )}
        </div>
      </div>
    )
  }
}


/* -----------------    CONTAINER     ------------------ */

const mapState = state => {
  return {}
}

const mapDispatch = dispatch => {
  return {
    // signup: addUser
  }
}

export default connect(mapState, mapDispatch)(Signup);
