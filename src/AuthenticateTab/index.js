import React from 'react';
import { getLoginHook } from '../apollo/common/hooks';
import Login from './Login';
import Logout from './Logout';

const AuthenticateTab = () => {
  /**
   * hook for login id
   */
  const userId = getLoginHook();

  return userId ? <Logout /> : <Login />;
};

export default AuthenticateTab;
