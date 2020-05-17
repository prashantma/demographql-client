const styles = () => {
  return {
    projectsTab: {
      padding: '0rem',
      paddingTop: '1rem',
    },
  };
};

export const projectSelectStyles = () => {
  return {
    projectSelect: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    },
    selectControl: {
      flex: 1,
    },
    separator: {
      height: '2rem',
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

export default styles;
