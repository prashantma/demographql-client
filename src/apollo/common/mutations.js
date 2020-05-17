import gql from 'graphql-tag';

export const SET_LOGONID = gql`
  mutation setLogonId($loginForm: _loginFormInput!) {
    setLogonId(loginForm: $loginForm) @client(always: true) {
      userId
    }
  }
`;

export const SET_SELECTED_PROJECT = gql`
  mutation setSelectedProject($projectId: String!) {
    setSelectedProject(projectId: $projectId) @client(always: true) {
      selectedProject
    }
  }
`;

export const SET_ADD_EDIT_TODO_ID = gql`
  mutation setAddEditTodoId($addEditTodoId: Int) {
    setAddEditTodoId(addEditTodoId: $addEditTodoId) @client(always: true) {
      addEditTodoId
    }
  }
`;
