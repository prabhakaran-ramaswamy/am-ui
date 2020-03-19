import {CREATE_MANAGE_ASSET_STARTED, UPDATE_MANAGE_ASSET_STARTED, DELETE_MANAGE_ASSET_STARTED, VIEW_MANAGE_ASSET_STARTED, LIST_MANAGE_ASSET_COMPLETED, LIST_MANAGE_ASSET_ERROR } from './actionTypes';
import {managedAssetsInitialState} from "../../http/initial-states";


export default (state = managedAssetsInitialState, action) => {
  switch (action.type) {
    case CREATE_MANAGE_ASSET_STARTED:
      return {...state, value: state.value + 1};
    case UPDATE_MANAGE_ASSET_STARTED:
      return {...state, value: state.value + 1};
    case DELETE_MANAGE_ASSET_STARTED:
      return {...state, value: state.value + 1};
    case VIEW_MANAGE_ASSET_STARTED:
      return {...state, value: state.value + 1};
    case LIST_MANAGE_ASSET_COMPLETED:
      state = state.set('managed_assets',action.payload.data.content);
      return state;
    case LIST_MANAGE_ASSET_ERROR:
        return state;
    default:
      return state;
  }
};
