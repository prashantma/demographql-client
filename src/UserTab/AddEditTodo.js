import React, { useState } from 'react';
import { object, string } from 'prop-types';
import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { addTodoHook, editTodoHook } from '../apollo/usertab/hooks';
import { setAddEditTodoIdHook } from '../apollo/common/hooks';

import { addEditTodoStyles } from './styles';

/* saves to server */
export const onSubmit = (submitTodo, todo) => () => {
  const { description } = todo;
  if (description) {
    submitTodo({ variables: { todo } });
  }
};

/* updats id of currently add/editing todo id in apollo local state */
export const resetAddEditTodoIdInCache = (setAddEditTodoId) => () => {
  setAddEditTodoId({
    variables: { addEditTodoId: -1 },
  });
};

export function AddEditTodoComponent(props) {
  const { addEditTodoId, classes, description, projectId, userId } = props;
  /**
   * hook to add/edit todo description
   */
  const [submitTodo] = !addEditTodoId ? addTodoHook() : editTodoHook();
  /**
   * hook to set current value of description text field
   */
  const [editedDescription, setTodoDescription] = useState(description);
  /**
   * hook to set currently editing todo id
   */
  const [setAddEditTodoId] = setAddEditTodoIdHook();

  const onChangeDescription = ({ target: { value } }) => {
    setTodoDescription(value);
  };

  return (
    <div className={classes.addEditTodo}>
      <TextField
        id="todo-description"
        label="Enter todo description."
        variant="outlined"
        className={classes.textfield}
        value={editedDescription}
        onChange={onChangeDescription}
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.buttons}
        onClick={onSubmit(submitTodo, {
          id: addEditTodoId,
          projectId,
          userId,
          description: editedDescription,
        })}
      >
        Submit
      </Button>
      <Button
        variant="contained"
        color="secondary"
        className={classes.buttons}
        onClick={resetAddEditTodoIdInCache(setAddEditTodoId)}
      >
        Cancel
      </Button>
    </div>
  );
}

AddEditTodoComponent.propTypes = {
  addEditTodoId: string,
  classes: object.isRequired,
  description: string,
  projectId: string.isRequired,
  userId: string.isRequired,
};

AddEditTodoComponent.defaultProps = {
  addEditTodoId: undefined,
  description: '',
};

export default withStyles(addEditTodoStyles)(AddEditTodoComponent);
