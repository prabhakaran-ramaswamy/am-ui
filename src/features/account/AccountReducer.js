import {CREATE_ACCOUNT_COMPLETED, UPDATE_ACCOUNT_STARTED, DELETE_ACCOUNT_STARTED, VIEW_ACCOUNT_STARTED, LIST_ACCOUNT_COMPLETED } from './actionTypes';
import {accountInitialState} from "../../http/initial-states";

export const accountReducer=(state = accountInitialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case CREATE_ACCOUNT_COMPLETED:
      
      return state;
    case UPDATE_ACCOUNT_STARTED:
      return state;
    case DELETE_ACCOUNT_STARTED:
      return state;
    case VIEW_ACCOUNT_STARTED:
      return state;
    case LIST_ACCOUNT_COMPLETED:
      console.log(state);
      return state;
    default:
      return state;
  }
};

