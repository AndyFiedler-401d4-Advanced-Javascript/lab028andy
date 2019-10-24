class List {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <Item item={item} />
        ))}
      </ul>
    )
  }
}