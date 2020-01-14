import React, {Component} from 'react';

class AssetManagementList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'AssetManagementList'};
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

export default AssetManagementList;
