import React from 'react';

class AssetCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'AssetCreate'};
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

export default AssetCreate;
