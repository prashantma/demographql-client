import gql from 'graphql-tag';

export const TODO_ADDED = gql`
  subscription todoAdded {
    todoAdded(about: "todo") {
      success
      todo {
        id
        description
        projectId
        userId
      }
    }
  }
`;

export const TODO_EDITED = gql`
  subscription todoEdited {
    todoEdited(about: "todo") {
      success
      todo {
        id
        description
      }
    }
  }
`;

export const TODO_MARKED_AS_COMPLETED = gql`
  subscription todoMarkedAsCompleted {
    todoMarkedAsCompleted(about: "todo") {
      success
      id
      completionDate
    }
  }
`;
