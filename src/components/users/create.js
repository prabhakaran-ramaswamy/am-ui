import React from 'react';

class UserCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'UserCreate'};
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

export default UserCreate;
