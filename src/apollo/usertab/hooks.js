import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { __DUMMY } from '../common/queries';
import { GET_PROJECTS_FOR_USER, GET_TODOS_FOR_USER } from './queries';
import { ADD_TODO, EDIT_TODO, MARK_AS_COMPLETE } from './mutations';

export function getProjectsHook(userId) {
  const query = !userId ? __DUMMY : GET_PROJECTS_FOR_USER;
  const { loading, error, data } = useQuery(query, {
    variables: { userId },
  });
  const { getProjectsForUser: getProjectsForUserResult = [] } = data || {};
  let projects = [];
  if (!loading && !error) {
    projects = getProjectsForUserResult;
  }
  return projects;
}

export function getTodosForUserHook(projectId, userId) {
  const query = !userId || !projectId ? __DUMMY : GET_TODOS_FOR_USER;
  const { loading, error, data } = useQuery(query, {
    variables: { projectId, userId },
  });
  const { getAllForUser: getTodosForUserResult = [] } = data || {};
  let todos = [];
  if (!loading && !error) {
    todos = getTodosForUserResult;
  }
  return todos;
}

export function markAsCompleteHook() {
  return useMutation(MARK_AS_COMPLETE, {
    update(cache, { data: { markAsComplete } }) {
      const UPDATE_TODO_IN_CACHE = gql`
        query updateTodo {
          todo {
            id
            completed
            completionDate
          }
        }
      `;
      cache.writeQuery({
        query: UPDATE_TODO_IN_CACHE,
        data: {
          todo: {
            ...markAsComplete,
            completed: true,
            __typename: 'Todo',
          },
        },
      });
    },
  });
}

export function addTodoHook() {
  return useMutation(ADD_TODO, {
    update(
      cache,
      {
        data: {
          addTodo: { success },
        },
      }
    ) {
      if (success !== true) {
        return;
      }
      const RESET_ADD_EDIT_TODO_ID = gql`
        query editTodoInCache {
          userView {
            addEditTodoId
          }
        }
      `;
      cache.writeQuery({
        query: RESET_ADD_EDIT_TODO_ID,
        data: {
          userView: {
            id: '_userView',
            addEditTodoId: -1,
            __typename: '_userView',
          },
        },
      });
    },
    refetchQueries: [
      {
        query: GET_TODOS_FOR_USER,
        variables: { projectId: 'PROJ0001', userId: 'USER0001' },
      },
    ],
    awaitRefetchQueries: true,
  });
}

export function editTodoHook() {
  return useMutation(EDIT_TODO, {
    update(
      cache,
      {
        data: {
          editTodo: { success },
        },
      }
    ) {
      if (success !== true) {
        return;
      }
      const RESET_ADD_EDIT_TODO_ID = gql`
        query editTodoInCache {
          userView {
            addEditTodoId
          }
        }
      `;
      cache.writeQuery({
        query: RESET_ADD_EDIT_TODO_ID,
        data: {
          userView: {
            id: '_userView',
            addEditTodoId: -1,
            __typename: '_userView',
          },
        },
      });
    },
    refetchQueries: [
      {
        query: GET_TODOS_FOR_USER,
        variables: { projectId: 'PROJ0001', userId: 'USER0001' },
      },
    ],
    awaitRefetchQueries: false,
  });
}
