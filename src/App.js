import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Counter from './components/Counter';
import NavigationBar from './components/navigation/navigation-bar';
import UserList from './components/users/list';
import UserCreate from './components/users/create';
import AssetCreate from './components/asset/create';
import AssetList from './components/asset/list';
import AssetManagementCreate from './components/asset-management/create';
import AssetManagementList from './components/asset-management/list';

const App = () => (
  <div className="App">
    <NavigationBar />
    <Router>
      <div>
        <Switch>
          <Route exact component={UserList} path="/" />
          <Route exactly component={UserList} pattern="/users" />
          <Route exactly component={UserCreate} pattern="/user-create" />
          <Route
            exactly
            component={AssetManagementList}
            path="/asset-management"
          />
          <Route
            exact
            component={AssetManagementCreate}
            pattern="/asset-management-create"
          />
          <Route exactly component={AssetList} path="/asset" />
          <Route exactly component={AssetCreate} pattern="/asset-create" />
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
