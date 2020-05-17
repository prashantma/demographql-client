import gql from 'graphql-tag';

/**
 * dummy query till app is ready to make service call
 */
export const __DUMMY = gql`
  query __dummy {
    __dummy @client
  }
`;

export const GET_LOGIN = gql`
  query getLogin {
    getLogin @client(always: true)
  }
`;

/**
 * added `selectedProject` in the gql, to get latest value
 * w/o this Apollo client uses cache to resolve ignoring @client(always: true) directive
 */
export const GET_USERVIEW = gql`
  query getUserView {
    getUserView @client(always: true) {
      selectedProject
      addEditTodoId
    }
  }
`;
