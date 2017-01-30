import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {signUp} from 'APP/app/reducers/auth';
import {connect} from 'react-redux';
import Navbar from './Navbar';
import Paper from 'material-ui/Paper';



function mapDispatchToProps(dispatch) {
  return {
    signUpSubmit: function(name, email, password) {
      dispatch(signUp(name, email, password));
    }
  }
}

export default connect (null, mapDispatchToProps) (
  class SignUp extends Component{
    constructor(){
      super();
      // local state used to verify passwords match before sending to Store
      this.state = {
        password : "",
        errorText : "",
        disabled : true
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChangePassword = this.handleChangePassword.bind(this);
      this.handleChangeConfirm = this.handleChangeConfirm.bind(this);
    }

    handleSubmit(evt){
      evt.preventDefault();
      this.props.signUpSubmit(evt.target.name.value, evt.target.email.value, evt.target.password.value);
    }

    handleChangePassword(evt){
      console.log(evt.target.value);
      this.setState({
        password : evt.target.value
      })
    }


    handleChangeConfirm(evt){
      console.log(evt.target.value);
      if(this.state.password !== evt.target.value){
        this.setState({
            errorText : "Passwords must match.",
            disabled: true
        })
      } else{
        this.setState({
            errorText : "",
            disabled : false
        })
      }
    }

    render(){
     return (
        <div>
          <div style={ style.container }>
            <Paper style={style.form} zDepth={2} >
              <h1 style={ style.title } >Sign Up</h1>
              <form onSubmit={this.handleSubmit}>
                <div>
                  <TextField
                    name="name"
                    hintText="Name"
                    floatingLabelText="Name"
                  /><br />
                  <br />
                  <TextField
                    name="email"
                    hintText="Email"
                    floatingLabelText="Email"
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
                    errorText={this.state.errorText}
                    onChange={this.handleChangeConfirm}
                  /><br />
                  <br />
                  <RaisedButton type="submit" value="signUp" label="Sign Up" backgroundColor="#FA8072" style={ style.button } disabled={this.state.disabled} labelStyle={{color: 'white'}}/>
                </div>
              </form>
            </Paper>
          </div>
        </div>
      );
    }
})


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



// import React from 'react';
// import { connect } from 'react-redux';

// import FlatButton from 'material-ui/FlatButton';
// import RaisedButton from 'material-ui/RaisedButton';
// // import {
// //   Step,
// //   Stepper,
// //   StepLabel,
// // } from 'material-ui/Stepper';

// import CreateUser from './stepper/CreateUser';


// // import { addUser } from '../action-creators/user';

// /* -----------------    COMPONENT     ------------------ */
// // SIGNUP is a smart component that renders one of three children components
// // depending on the position of the stepper

// // those dumb components are in the stepper folder

// // props are passed to them...

// // TO DO!! : form validation and sign up submission
// // should actually create a user account with a new pet

// class Signup extends React.Component {

//   constructor(props) {
//     super(props)

//     this.state = {
//       step: 0,
//       finished: false,
//       useraccount: {
//         name: '',
//         email: '',
//         password: '',
//         passwordConfirm: '',
//       },
//       paperwork: {
//         color: '',
//         food: '',
//         cat: '',
//         experience: '',
//       },
//       contract: {
//         signature: false,
//       },
//     }
//     this.handlePrev = this.handlePrev.bind(this);
//     this.handleNext = this.handleNext.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleNext() {
//     const {step} = this.state;
//     this.setState({
//       step: step + 1,
//       finished: step >= 2,
//     });
//   }

//   handlePrev() {
//     const {step} = this.state;
//     if (step > 0) {
//       this.setState({step: step - 1});
//     }
//   }

//   handleSubmit(e){
//     e.preventDefault();
//     const {step} = this.state;


//   }

//   getStepContent(step) {
//     switch (step) {
//       case 0:
//         return <CreateUser user={this.state.useraccount}/>;
//       case 1:
//         return <Adopt answers={this.state.paperwork}/>;
//       case 2:
//         return <Signature />;
//       default:
//         return 'error';
//     }
//   }

//   render() {
//     const {step, finished} = this.state

//     return (
//       <div>
//         <Stepper activeStep={step}>
//           <Step>
//             <StepLabel>Create user account</StepLabel>
//           </Step>
//           <Step>
//             <StepLabel>Adoption paperwork</StepLabel>
//           </Step>
//           <Step>
//             <StepLabel>Signature</StepLabel>
//           </Step>
//         </Stepper>
//         <div style={{margin: '0 16px'}}>
//           {finished ? (
//             <div>
//               success! you can login (not actually yet)
//             </div>
//           ) : (
//             <form onSubmit={this.handleSubmit}>
//               {this.getStepContent(step)}
//               <div style={{marginTop: 12}}>
//                 <FlatButton
//                   label="Back"
//                   disabled={step === 0}
//                   onTouchTap={this.handlePrev}
//                   style={{marginRight: 12}}
//                 />
//                 <RaisedButton
//                   type="submit"
//                   label={step === 2 ? 'Finish' : 'Next'}
//                   primary={true}
//                   onTouchTap={this.handleNext}
//                 />
//               </div>
//             </form>
//           )}
//         </div>
//       </div>
//     )
//   }
// }


// /* -----------------    CONTAINER     ------------------ */

// const mapState = state => {
//   return {}
// }

// const mapDispatch = dispatch => {
//   return {
//     // signup: addUser
//   }
// }

// export default connect(mapState, mapDispatch)(Signup);
