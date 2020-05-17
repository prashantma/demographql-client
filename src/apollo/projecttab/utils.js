import gql from 'graphql-tag';

export function getNewTodo(newData) {
  const todo = {
    ...{
      id: newData.id,
      description: newData.description,
      completed: true,
      completionDate: newData.completionDate,
      projectId: newData.projectId,
      userId: newData.userId,
    },
    __typename: 'Todo',
  };
  return todo;
}

export function todoAddedData({ client, subscriptionData }) {
  const newData =
    subscriptionData &&
    subscriptionData.data &&
    subscriptionData.data.todoAdded &&
    subscriptionData.data.todoAdded.todo;
  if (!newData) {
    return;
  }

  client.writeQuery({
    query: gql`
      query todoQuery {
        Todo {
          id
          description
          projectId
          userId
        }
      }
    `,
    data: { Todo: getNewTodo(newData) },
  });
}

export function todoEditedData({ client, subscriptionData }) {
  const newData =
    subscriptionData &&
    subscriptionData.data &&
    subscriptionData.data.todoEdited &&
    subscriptionData.data.todoEdited.todo;
  if (!newData) {
    return;
  }

  client.writeQuery({
    query: gql`
      query todoQuery {
        Todo {
          id
          description
        }
      }
    `,
    data: { Todo: getNewTodo(newData) },
  });
}

export function onTodoMarkedAsCompletedData({ client, subscriptionData }) {
  const newData =
    subscriptionData &&
    subscriptionData.data &&
    subscriptionData.data.todoMarkedAsCompleted;
  if (!newData) {
    return;
  }

  client.writeQuery({
    query: gql`
      query todoQuery {
        Todo {
          id
          completed
          completionDate
        }
      }
    `,
    data: { Todo: getNewTodo(newData) },
  });
}
