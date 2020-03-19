import {UPDATE_ACCOUNT_VALUES,CREATE_ACCOUNT_COMPLETED, UPDATE_ACCOUNT_STARTED, DELETE_ACCOUNT_STARTED, VIEW_ACCOUNT_STARTED, LIST_ACCOUNT_COMPLETED , LIST_ACCOUNT_ERROR} from './actionTypes';
import {accountsInitialState} from "../../http/initial-states";

export const accountReducer=(state = accountsInitialState, action) => {
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
      state = state.set('accounts',action.payload.data.content);
      return state;
    case LIST_ACCOUNT_ERROR:
      console.log(action.payload);
      return state;
      case UPDATE_ACCOUNT_VALUES:
        state = state.setIn(['account',action.payload.name],action.payload.value);
        return state;
    default:
      return state;
  }
};

