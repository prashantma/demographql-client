import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_LOGIN, GET_USERVIEW } from './queries';
import {
  SET_ADD_EDIT_TODO_ID,
  SET_LOGONID,
  SET_SELECTED_PROJECT,
} from './mutations';

export function getLoginHook() {
  const { loading, error, data } = useQuery(GET_LOGIN);
  let userId = '';
  const { getLogin: loginResult = {} } = data || {};
  if (!loading && !error) {
    userId = loginResult.userId;
  }
  return userId;
}

export function getUserViewHook() {
  const { loading, error, data } = useQuery(GET_USERVIEW);
  let userView = {};
  const { getUserView: userViewResult = {} } = data || {};
  if (!loading && !error) {
    userView = userViewResult;
  }
  return userView;
}

export function setSelectedProjectHook() {
  return useMutation(SET_SELECTED_PROJECT);
}

export function setAddEditTodoIdHook() {
  return useMutation(SET_ADD_EDIT_TODO_ID);
}

export function setLogonId() {
  return useMutation(SET_LOGONID);
}

export function loginHook() {
  return setLogonId();
}

export function logoutHook() {
  return setLogonId();
}
