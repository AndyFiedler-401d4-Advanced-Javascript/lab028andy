class Header {
  render() {
    return (
      <header id="header">
        <h2>There are {this.props.count} Items To Complete</h2>
      </header>
    );
  }
}