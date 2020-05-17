import gql from 'graphql-tag';

const setLogonId = async (
  _,
  { loginForm: { userId = '' } = {} }, // when logging out loginForm is undefined
  { cache }
) => {
  const query = gql`
    query GetLogin {
      login {
        id
        userId
      }
      userView {
        id
        selectedProject
      }
    }
  `;

  const previous = cache.readQuery({ query });
  const login = {
    ...previous.login,
    userId,
  };
  const userView = {
    ...previous.userView,
    selectedProject: '',
  };

  // you can also do cache.writeData({ data }) here if you prefer
  cache.writeData({ data: { login, userView } });
  // console.log('mutation completed', login, userView);
  return login;
};

const setSelectedProject = async (_, { projectId }, { cache }) => {
  const query = gql`
    query GetUserView {
      userView {
        id
        selectedProject
      }
    }
  `;

  const previous = cache.readQuery({ query });
  const userView = {
    ...previous.userView,
    selectedProject: projectId,
  };

  // you can also do cache.writeData({ data }) here if you prefer
  cache.writeData({ data: { userView } });
  // console.log('mutation completed', userView);
  return userView;
};

const setAddEditTodoId = async (_, { addEditTodoId }, { cache }) => {
  const query = gql`
    query GetUserView {
      userView {
        id
        addEditTodoId
      }
    }
  `;

  const previous = cache.readQuery({ query });
  const userView = {
    ...previous.userView,
    addEditTodoId,
  };

  // you can also do cache.writeData({ data }) here if you prefer
  cache.writeData({ data: { userView } });
  // console.log('mutation completed', userView);
  return userView;
};

export { setAddEditTodoId, setLogonId, setSelectedProject };
