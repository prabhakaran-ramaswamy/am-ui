import {CREATE_ACCOUNT_STARTED, UPDATE_ACCOUNT_STARTED, DELETE_ACCOUNT_STARTED, VIEW_ACCOUNT_STARTED, LIST_ACCOUNT_STARTED } from './actionTypes';
import {accountInitialState} from "../../http/initial-states";

export const accountReducer=(state = accountInitialState, action) => {
  switch (action.type) {
    case CREATE_ACCOUNT_STARTED:
      return state;
    case UPDATE_ACCOUNT_STARTED:
      return state;
    case DELETE_ACCOUNT_STARTED:
      return state;
    case VIEW_ACCOUNT_STARTED:
      return state;
    case LIST_ACCOUNT_STARTED:
      return state;
    default:
      return state;
  }
};

