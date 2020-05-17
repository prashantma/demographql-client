import React from 'react';
import { object, string } from 'prop-types';
import { withStyles } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { getTodos } from '../apollo/projecttab/hooks';
import { todoListStyles } from './styles';

export function TodoListComponent(props) {
  const { classes, projectId, userId } = props;
  /**
   * hook to get todos of select project optionally filtered by user
   */
  const todos = getTodos(projectId, userId);

  return (
    <div className={classes.todoList}>
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
              />
            </ListItemIcon>
            <ListItemText id={`todo-${todo.id}`} primary={todo.description} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

TodoListComponent.propTypes = {
  classes: object.isRequired,
  projectId: string.isRequired,
  userId: string,
};

TodoListComponent.defaultProps = {
  userId: '',
};

export default withStyles(todoListStyles)(TodoListComponent);
