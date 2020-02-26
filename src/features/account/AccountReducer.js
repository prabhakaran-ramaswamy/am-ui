import {CREATE_ACCOUNT_STARTED, UPDATE_ACCOUNT_STARTED, DELETE_ACCOUNT_STARTED, VIEW_ACCOUNT_STARTED, LIST_ACCOUNT_STARTED } from './actionTypes';

const initialState = {};

export default (state = initialState, action) => {
  console.log(action.type)
  switch (action.type) {
    case CREATE_ACCOUNT_STARTED:
      return {...state, value: state.value + 1};
    case UPDATE_ACCOUNT_STARTED:
      return {...state, value: state.value + 1};
    case DELETE_ACCOUNT_STARTED:
      return {...state, value: state.value + 1};
    case VIEW_ACCOUNT_STARTED:
      return {...state, value: state.value + 1};
    case LIST_ACCOUNT_STARTED:
      return {...state, value: state.value + 1};
    default:
      return state;
  }
};

