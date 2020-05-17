import React, { PureComponent } from 'react';
import { object } from 'prop-types';
import { withStyles } from '@material-ui/core';
import ProjectSelect from './ProjectSelect';
import TodoList from './TodoList';
import styles from './styles';

export class ProjectsTabComponent extends PureComponent {
  static propTypes = {
    classes: object.isRequired,
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.projectsTab}>
        <div className={classes.userTab}>
          <ProjectSelect todoListComponent={TodoList} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ProjectsTabComponent);
