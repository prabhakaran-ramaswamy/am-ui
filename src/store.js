import {combineReducers, createStore} from 'redux';
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

const store = createStore(rootReducer, reduxDevtoolsEnhancer);

export default store;
