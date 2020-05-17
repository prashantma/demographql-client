import gql from 'graphql-tag';

export const GET_ALL_PROJECTS = gql`
  query getAllProjects {
    getAllProjects {
      projectId
      projectName
      projectDescription
    }
  }
`;

export const GET_USERS_FOR_PROJECT = gql`
  query getUsersForProject($projectId: String!) {
    getUsersForProject(projectId: $projectId) {
      userId
      firstName
      lastName
    }
  }
`;

export const GET_TODOS_FOR_USER = gql`
  query getAllForUser($projectId: String!, $userId: String!) {
    getAllForUser(projectId: $projectId, userId: $userId) {
      id
      projectId
      userId
      description
      completed
      completionDate
    }
  }
`;

export const GET_TODOS_FOR_PROJECT = gql`
  query getAllForProject($projectId: String!) {
    getAllForProject(projectId: $projectId) {
      id
      projectId
      userId
      description
      completed
      completionDate
    }
  }
`;
