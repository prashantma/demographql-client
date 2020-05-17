import React, { useState } from 'react';
import { any, object } from 'prop-types';
import { withStyles } from '@material-ui/core';
import Select from '../Select';
import {
  getProjectsHook,
  getUsersHook,
  todoAddedHook,
  todoEditedHook,
  todoMarkedAsCompletedHook,
} from '../apollo/projecttab/hooks';
import { getLoginHook } from '../apollo/common/hooks';
import { projectSelectStyles } from './styles';

export function ProjectSelectComponent(props) {
  const { classes, todoListComponent: TodoList } = props;
  /**
   * hook to subscribe todo changes
   */
  todoAddedHook();
  todoEditedHook();
  todoMarkedAsCompletedHook();
  /**
   * hook for login id
   */
  const userId = getLoginHook();
  /**
   * hook to get projects of the logged in user
   */
  const projects = getProjectsHook(userId);
  /**
   * hook to set current value of selected project
   */
  const [selectedProject, setSelectedProject] = useState('');
  /**
   * hook to get users for selected project
   */
  const users = getUsersHook(selectedProject);
  /**
   * hook to set current value of selected user
   */
  const [selectedUser, setSelectedUser] = useState('');

  const onChangeProject = ({ target: { value } }) => {
    setSelectedProject(value);
    setSelectedUser('');
  };

  const onChangeUser = ({ target: { value } }) => {
    setSelectedUser(value);
  };

  const userOptions = users.map((user) => ({
    userId: user.userId,
    userName: `${user.firstName} ${user.lastName}`,
  }));

  return (
    <div className={classes.projectSelect}>
      <Select
        className={classes.selectControl}
        id="projectSelect"
        label="Select Project"
        onChange={onChangeProject}
        options={projects}
        textAttribute="projectName"
        value={selectedProject}
        valueAttribute="projectId"
      />
      <div className={classes.separator} />
      <Select
        className={classes.selectControl}
        id="userSelect"
        label="Filter By User"
        onChange={onChangeUser}
        options={[{ userId: '', userName: 'All' }, ...userOptions]}
        textAttribute="userName"
        value={selectedUser}
        valueAttribute="userId"
      />
      <TodoList projectId={selectedProject} userId={selectedUser} />
    </div>
  );
}

ProjectSelectComponent.propTypes = {
  classes: object.isRequired,
  todoListComponent: any.isRequired,
};

export default withStyles(projectSelectStyles)(ProjectSelectComponent);
