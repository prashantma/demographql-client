export const loginStyles = () => {
  return {
    login: {
      display: 'flex',
      flexDirection: 'column',
      padding: '0rem',
      paddingTop: '1rem',
    },
    textfield: {
      flex: '1',
      paddingTop: '1rem',
      paddingBottom: '1rem',
    },
    buttons: {
      justifySelf: 'flex-end',
    },
  };
};

export const logoutStyles = () => {
  return {
    logout: {
      display: 'flex',
      flexDirection: 'column',
      padding: '0rem',
      paddingTop: '1rem',
    },
    buttons: {
      marginLeft: '1rem',
      justifySelf: 'flex-end',
    },
  };
};
