import React, { PureComponent } from 'react';
import { object } from 'prop-types';
import { withStyles } from '@material-ui/core';
import ProjectSelect from './ProjectSelect';
import TodoList from './TodoList';
import { styles } from './styles';

export class UserTabComponent extends PureComponent {
  static propTypes = {
    classes: object.isRequired,
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.userTab}>
        <ProjectSelect />
        <TodoList />
      </div>
    );
  }
}

export default withStyles(styles)(UserTabComponent);
