import React, {Component} from 'react';

class AssetManagementCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'AssetManagementCreate'};
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

export default AssetManagementCreate;
