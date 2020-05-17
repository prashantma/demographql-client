import React, { useState } from 'react';
import { object } from 'prop-types';
import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { loginHook } from '../apollo/common/hooks';
import { loginStyles } from './styles';

export const onSubmit = (login, { userName: userId, password }) => () => {
  if (userId && password) {
    login({ variables: { loginForm: { userId, password } } });
  }
};

export const LoginComponent = ({ classes }) => {
  /**
   * hook to set current value of user name text field
   */
  const [userName, setUserName] = useState('');
  /**
   * hook to set current value of password text field
   */
  const [password, setPassword] = useState('');
  /**
   * hook to set currently logon user id
   */
  const [login] = loginHook();

  const onChangeUserName = ({ target: { value } }) => {
    setUserName(value);
  };

  const onChangePassword = ({ target: { value } }) => {
    setPassword(value);
  };

  return (
    <div className={classes.login}>
      <TextField
        id="login-userid"
        label="User Name"
        variant="outlined"
        className={classes.textfield}
        value={userName}
        onChange={onChangeUserName}
      />
      <TextField
        id="login-password"
        label="Password"
        variant="outlined"
        className={classes.textfield}
        value={password}
        onChange={onChangePassword}
        type="password"
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.buttons}
        onClick={onSubmit(login, { userName, password })}
      >
        Login
      </Button>
    </div>
  );
};

LoginComponent.propTypes = {
  classes: object.isRequired,
};

export default withStyles(loginStyles)(LoginComponent);
