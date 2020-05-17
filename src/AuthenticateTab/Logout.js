import React from 'react';
import { object } from 'prop-types';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { logoutHook } from '../apollo/common/hooks';
import { logoutStyles } from './styles';

/* update logon user id in apollo local state */
export const onLogout = (logout) => () => {
  logout();
};

export function LogoutComponent(props) {
  const { classes } = props;
  /**
   * hook to set selected project
   */
  const [logout] = logoutHook();

  return (
    <div className={classes.logout}>
      <Button
        variant="contained"
        color="primary"
        className={classes.buttons}
        onClick={onLogout(logout)}
      >
        Logout
      </Button>
    </div>
  );
}

LogoutComponent.propTypes = {
  classes: object.isRequired,
};

export default withStyles(logoutStyles)(LogoutComponent);
