import gql from 'graphql-tag';

const __dummy = () => [];

const getLogin = (_, __, { cache }) => {
  const fragment = gql`
    fragment _loginFragment on _login {
      userId
    }
  `;
  const loginData = cache.readFragment({ fragment, id: '_login:_login' });
  // console.log('getLogin', loginData);
  return loginData;
};

const getUserView = (_, __, { cache }) => {
  // console.log('resolvers', 'getUserView', 'starting');
  const fragment = gql`
    fragment _userViewFragment on _userView {
      id
      selectedProject
      addEditTodoId
    }
  `;
  const userView = cache.readFragment({
    fragment,
    id: '_userView:_userView',
  });
  // console.log('resolvers', 'getUserView', userView);
  return userView;
};

export { __dummy, getLogin, getUserView };
