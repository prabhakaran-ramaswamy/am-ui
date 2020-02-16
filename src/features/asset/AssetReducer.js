import {CREATE_ASSET_STARTED, UPDATE_ASSET_STARTED, DELETE_ASSET_STARTED, VIEW_ASSET_STARTED, LIST_ASSET_STARTED } from './actionTypes';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ASSET_STARTED:
      return {...state, value: state.value + 1};
    case UPDATE_ASSET_STARTED:
      return {...state, value: state.value + 1};
    case DELETE_ASSET_STARTED:
      return {...state, value: state.value + 1};
    case VIEW_ASSET_STARTED:
      return {...state, value: state.value + 1};
    case LIST_ASSET_STARTED:
      return {...state, value: state.value + 1};
    default:
      return state;
  }
};

