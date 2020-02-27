import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {AccountReducer} from './features/account';
import {AssetReducer} from './features/asset';
import {ManageAssetReducer} from './features/manage_asset';


/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  ma: ManageAssetReducer,
  account:AccountReducer,
  asset:AssetReducer
});

/* eslint-disable no-underscore-dangle */
const reduxDevtoolsEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(); // initialize Redux Dev Tools, if they are installed in browser.
/* eslint-enable */

const store = createStore(rootReducer, reduxDevtoolsEnhancer,  applyMiddleware(thunk));

export default store;
