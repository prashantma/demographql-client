export const styles = () => {
  return {
    userTab: {
      display: 'flex',
      flexDirection: 'column',
      padding: '0rem',
      paddingTop: '1rem',
    },
  };
};

export const projectSelectStyles = () => {
  return {
    projectSelect: {
      width: '100%',
    },
    selectControl: {
      flex: 1,
    },
  };
};

export const todoListStyles = () => {
  return {
    todoList: {
      display: 'flex',
      flexDirection: 'column',
      paddingTop: '2rem',
    },
    todo: {},
  };
};

export const addEditTodoStyles = () => {
  return {
    addEditTodo: {
      display: 'flex',
      flexDirection: 'row',
      flex: 1,
    },
    textfield: {
      flex: '1',
    },
    buttons: {
      marginLeft: '1rem',
      justifySelf: 'flex-end',
    },
  };
};
