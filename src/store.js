import {combineReducers, compose, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {accountReducer} from './features/account';
import {AssetReducer} from './features/asset';
import {ManageAssetReducer} from './features/manage_asset';

/* Create root reducer, containing all features of the application */
export const rootReducer = combineReducers({
  ma: ManageAssetReducer,
  account:accountReducer,
  asset:AssetReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;
