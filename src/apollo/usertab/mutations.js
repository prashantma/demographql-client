import gql from 'graphql-tag';

export const MARK_AS_COMPLETE = gql`
  mutation markAsComplete($todo: TodoReferenceInput!) {
    markAsComplete(todo: $todo) {
      success
      id
      completionDate
    }
  }
`;

export const ADD_TODO = gql`
  mutation addTodo($todo: TodoInput!) {
    addTodo(todo: $todo) {
      success
      id
    }
  }
`;

export const EDIT_TODO = gql`
  mutation editTodo($todo: TodoInput!) {
    editTodo(todo: $todo) {
      success
      id
    }
  }
`;
