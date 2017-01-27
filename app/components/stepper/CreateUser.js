import React from 'react';

import TextField from 'material-ui/TextField';

/* -----------------    COMPONENT     ------------------ */

export default (props) => {
  return (
    <div className="">

      <h2>Sign up</h2>

        <div>
          <TextField
            name="name"
            floatingLabelText="Name"
            defaultValue={props.user.name}
          /><br />
          <br />
          <TextField
            name="email"
            floatingLabelText="Email"
            defaultValue={props.user.email}
            required
          /><br />
          <br />
          <TextField
            name="password"
            floatingLabelText="Password"
            type="password"
            defaultValue={props.user.password}
            required
          /><br />
          <br />
          <TextField
            name="passwordConfirm"
            floatingLabelText="Confirm Password"
            type="password"
            errorText={props.errorText}
            onChange={props.handleChangeConfirm}
            defaultValue={props.user.passwordConfirm}
            required
          /><br />
          <br />

        </div>


    </div>
  )
}
