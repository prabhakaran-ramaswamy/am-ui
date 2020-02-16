import {CREATE_MANAGE_ASSET_STARTED, UPDATE_MANAGE_ASSET_STARTED, DELETE_MANAGE_ASSET_STARTED, VIEW_MANAGE_ASSET_STARTED, LIST_MANAGE_ASSET_STARTED } from './actionTypes';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_MANAGE_ASSET_STARTED:
      return {...state, value: state.value + 1};
    case UPDATE_MANAGE_ASSET_STARTED:
      return {...state, value: state.value + 1};
    case DELETE_MANAGE_ASSET_STARTED:
      return {...state, value: state.value + 1};
    case VIEW_MANAGE_ASSET_STARTED:
      return {...state, value: state.value + 1};
    case LIST_MANAGE_ASSET_STARTED:
      return {...state, value: state.value + 1};
    default:
      return state;
  }
};
