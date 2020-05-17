import { useQuery, useSubscription } from '@apollo/react-hooks';
import {
  GET_ALL_PROJECTS,
  GET_USERS_FOR_PROJECT,
  GET_TODOS_FOR_PROJECT,
  GET_TODOS_FOR_USER,
} from './queries';
import {
  TODO_ADDED,
  TODO_EDITED,
  TODO_MARKED_AS_COMPLETED,
} from './subscriptions';
import {
  todoAddedData,
  todoEditedData,
  onTodoMarkedAsCompletedData,
} from './utils';

export function getProjectsHook(/* userId */) {
  const { loading, error, data } = useQuery(GET_ALL_PROJECTS, {
    variables: {
      /* userId */
    },
  });
  const { getAllProjects: getAllProjectsResult = [] } = data || {};
  let projects = [];
  if (!loading && !error) {
    projects = getAllProjectsResult;
  }
  return projects;
}

export function getUsersHook(projectId) {
  const { loading, error, data } = useQuery(GET_USERS_FOR_PROJECT, {
    variables: { projectId },
  });
  const { getUsersForProject: getUsersForProjectResult = [] } = data || {};
  let users = [];
  if (!loading && !error) {
    users = getUsersForProjectResult;
  }
  return users;
}

export function getTodosForProjectHook(projectId) {
  const { loading, error, data } = useQuery(GET_TODOS_FOR_PROJECT, {
    variables: { projectId },
    fetchPolicy: 'cache-and-network',
  });
  const { getAllForProject: getAllForProjectResult = [] } = data || {};
  let todos = [];
  if (!loading && !error) {
    todos = getAllForProjectResult;
  }
  return todos;
}

export function getTodosForUserHook(projectId, userId) {
  const { loading, error, data } = useQuery(GET_TODOS_FOR_USER, {
    variables: { projectId, userId },
    fetchPolicy: 'cache-and-network',
  });
  const { getAllForUser: getTodosForUserResult = [] } = data || {};
  let todos = [];
  if (!loading && !error) {
    todos = getTodosForUserResult;
  }
  return todos;
}

export function getTodos(projectId, userId) {
  return userId
    ? getTodosForUserHook(projectId, userId)
    : getTodosForProjectHook(projectId);
}

export function todoAddedHook() {
  return useSubscription(TODO_ADDED, {
    onSubscriptionData: todoAddedData,
  });
}

export function todoEditedHook() {
  return useSubscription(TODO_EDITED, {
    onSubscriptionData: todoEditedData,
  });
}

export function todoMarkedAsCompletedHook() {
  return useSubscription(TODO_MARKED_AS_COMPLETED, {
    onSubscriptionData: onTodoMarkedAsCompletedData,
  });
}
