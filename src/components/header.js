import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <h2>There are {this.props.count} Items To Complete</h2>
      </header>
    );
  }
}

export default Header;
