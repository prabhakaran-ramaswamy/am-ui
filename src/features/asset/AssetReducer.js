import {CREATE_ASSET_STARTED, UPDATE_ASSET_STARTED, DELETE_ASSET_STARTED, VIEW_ASSET_STARTED, LIST_ASSET_COMPLETED,LIST_ASSET_ERROR } from './actionTypes';
import {assetsInitialState} from "../../http/initial-states";

export default (state = assetsInitialState, action) => {
  switch (action.type) {
    case CREATE_ASSET_STARTED:
      return {...state, value: state.value + 1};
    case UPDATE_ASSET_STARTED:
      return {...state, value: state.value + 1};
    case DELETE_ASSET_STARTED:
      return {...state, value: state.value + 1};
    case VIEW_ASSET_STARTED:
      return {...state, value: state.value + 1};
    case LIST_ASSET_COMPLETED:
      state = state.set('assets',action.payload.data.content);
      return state;
      case LIST_ASSET_ERROR:
        return state;
    default:
      return state;
  }
};

