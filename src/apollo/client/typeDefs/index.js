import gql from 'graphql-tag';

const typeDefs = gql`
  type _login {
    id: String!
    userId: String!
  }

  type _userView {
    id: String!
    selectedProject: String!
  }

  type _projectView {
    id: String!
  }

  input _loginFormInput {
    userId: String
    password: String
  }

  type Query {
    __dummy: [String]
    getLogin: _login!
    getUserView: _userView!
  }

  type Mutation {
    setLogin(loginForm: _loginFormInput): _login
    setSelectedProject(projectId: String!): _userView
    setAddEditTodoId(addEditTodoId: Int): _userView
  }
`;

export default typeDefs;
