import React from 'react';

class Item extends React.Component{

  removeTodo = e => {
    e.preventDefault();
    this.props.removeTodo(this.props.item);
  };
  toggleComplete = e => {
    e.preventDefault();
    this.props.toggleComplete(this.props.item);
  }

  render() {
    let { complete, id, text } = this.props.item;
    return (
        <li className={`complete-${complete}`}>
          <span id={id} onClick={this.toggleComplete}>
            {text}
          </span>
          <button onClick={this.removeTodo}>delete</button>
        </li>
    )
  }
}

export default Item;
