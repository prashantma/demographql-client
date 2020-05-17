import React from 'react';
import { object } from 'prop-types';
import { withStyles } from '@material-ui/core';
import Select from '../Select';
import { getProjectsHook } from '../apollo/usertab/hooks';
import {
  getLoginHook,
  getUserViewHook,
  setSelectedProjectHook,
} from '../apollo/common/hooks';
import { projectSelectStyles } from './styles';

/* update selected project in apollo local state */
export const onChange = (setSelectedProjectId) => ({
  target: { value: projectId },
}) => {
  setSelectedProjectId({ variables: { projectId } });
};

export function ProjectSelectComponent(props) {
  const { classes } = props;
  /**
   * hook for login id
   */
  const userId = getLoginHook();
  /**
   * hook to get projects of the logged in user
   */
  const projects = getProjectsHook(userId);
  /**
   * hook to set selected project
   */
  const [setSelectedProjectId] = setSelectedProjectHook();
  /**
   * hook to get selected project
   */
  const { selectedProject } = getUserViewHook();

  return (
    <div className={classes.projectSelect}>
      <Select
        className={classes.selectControl}
        id="projectSelect"
        label="Select Project"
        onChange={onChange(setSelectedProjectId)}
        options={projects}
        textAttribute="projectName"
        value={selectedProject}
        valueAttribute="projectId"
      />
    </div>
  );
}

ProjectSelectComponent.propTypes = {
  classes: object.isRequired,
};

export default withStyles(projectSelectStyles)(ProjectSelectComponent);
