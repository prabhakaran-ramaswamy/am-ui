import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import NavigationBar from './components/navigation/navigation-bar';
import UserList from './components/account/list';
import UserCreate from './components/account/create';
import AssetCreate from './components/asset/create';
import AssetList from './components/asset/list';
import AssetManagementCreate from './components/asset-management/create';
import AssetManagementList from './components/asset-management/list';
import history from './history';
import {makeAccountRequest, makeAssetRequest, makeMangedAssetRequest} from './http/http_data'

const App = () => {
    return (
      <div className="App">
        <Router history={history}>
          <NavigationBar />
          <Switch>
            <Route exact component={UserList} path="/" onEnter={makeAccountRequest()}/>
            <Route component={UserList} path="/users" />
            <Route component={UserCreate} path="/user-create" />
            <Route component={AssetManagementList} path="/asset-user-list" onEnter={makeMangedAssetRequest()}/>
            <Route
              component={AssetManagementCreate}
              path="/asset-management-create"
            />
            <Route component={AssetList} path="/assets" onEnter={makeAssetRequest()}/>
            <Route component={AssetCreate} path="/asset-create" />
          </Switch>
        </Router>
      </div>
    );
  }

  
export default App;
