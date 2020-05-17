import React from 'react';
import { object } from 'prop-types';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import AddEditTodo from './AddEditTodo';
import {
  getLoginHook,
  getUserViewHook,
  setAddEditTodoIdHook,
} from '../apollo/common/hooks';
import {
  getTodosForUserHook,
  markAsCompleteHook,
} from '../apollo/usertab/hooks';
import { todoListStyles } from './styles';

/* updats id of currently add/editing todo id in apollo local state */
export const setAddEditTodoIdInCache = (
  setAddEditTodoId,
  addEditTodoId
) => () => {
  setAddEditTodoId({
    variables: { addEditTodoId: parseInt(addEditTodoId, 10) },
  });
};

export function TodoListComponent(props) {
  const { classes } = props;
  /**
   * hook for login id
   */
  const userId = getLoginHook();
  /**
   * hook to get selected project
   */
  const { selectedProject, addEditTodoId } = getUserViewHook();
  /**
   * hook to get todos of the logged in user
   */
  const todos = getTodosForUserHook(selectedProject, userId);
  /**
   * hook to set currently editing todo id
   */
  const [setAddEditTodoId] = setAddEditTodoIdHook();
  /**
   * hook to mark todo as complete
   */
  const [markAsComplete] = markAsCompleteHook();

  const addEditTodoParams = {
    addEditTodoId: addEditTodoId === 0 ? undefined : addEditTodoId,
    projectId: selectedProject,
    userId,
  };

  return (
    <div className={classes.todoList}>
      {addEditTodoId !== 0 && selectedProject && selectedProject.length && (
        <Button
          color="primary"
          onClick={setAddEditTodoIdInCache(setAddEditTodoId, 0)}
        >
          + Add
        </Button>
      )}
      {addEditTodoId === 0 && <AddEditTodo {...addEditTodoParams} />}
      <List component="nav" aria-label="list of todos">
        {todos.map((todo) => (
          <ListItem
            className={classes.todo}
            key={`todo-${todo.id}`}
            role={undefined}
            dense
            button
            disableRipple={todo.completed}
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={todo.completed}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': `todo-${todo.id}` }}
                onClick={() => {
                  if (todo.completed) {
                    return true;
                  }
                  return markAsComplete({
                    variables: { todo: { id: parseInt(todo.id, 10) } },
                  });
                }}
              />
            </ListItemIcon>
            {addEditTodoId === parseInt(todo.id, 10) ? (
              <AddEditTodo
                {...addEditTodoParams}
                description={todo.description}
              />
            ) : (
              <>
                <ListItemText
                  id={`todo-${todo.id}`}
                  primary={todo.description}
                />
                <ListItemSecondaryAction
                  onClick={setAddEditTodoIdInCache(setAddEditTodoId, todo.id)}
                >
                  <IconButton edge="end" aria-label="Edit todo description">
                    <CommentIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </>
            )}
          </ListItem>
        ))}
      </List>
    </div>
  );
}

TodoListComponent.propTypes = {
  classes: object.isRequired,
};

export default withStyles(todoListStyles)(TodoListComponent);
