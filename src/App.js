import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavigationBar from './components/navigation/navigation-bar';
import UserList from './components/users/list';
import UserCreate from './components/users/create';
import AssetCreate from './components/asset/create';
import AssetList from './components/asset/list';
import AssetManagementCreate from './components/asset-management/create';
import AssetManagementList from './components/asset-management/list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Router>
          <NavigationBar />
          <Switch>
            <Route exact component={UserList} path="/" />
            <Route component={UserList} path="/users" />
            <Route component={UserCreate} path="/user-create" />
            <Route component={AssetManagementList} path="/asset-user-list" />
            <Route
              component={AssetManagementCreate}
              path="/asset-management-create"
            />
            <Route component={AssetList} path="/assets" />
            <Route component={AssetCreate} path="/asset-create" />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
