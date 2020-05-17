import gql from 'graphql-tag';

export const GET_PROJECTS_FOR_USER = gql`
  query getProjectsForUser($userId: String!) {
    getProjectsForUser(userId: $userId) {
      projectId
      projectName
      projectDescription
    }
  }
`;

export const GET_TODOS_FOR_USER = gql`
  query getAllForUser($projectId: String!, $userId: String!) {
    getAllForUser(projectId: $projectId, userId: $userId) {
      id
      description
      completed
      completionDate
    }
  }
`;
