class Item {
  render() {
    let { complete, id, text } = this.props.item;
    return (
        <li class={`complete-${complete}`}>
          <span id={id}>
            {text}
          </span>
          <button>delete</button>
        </li>
    )
  }
}