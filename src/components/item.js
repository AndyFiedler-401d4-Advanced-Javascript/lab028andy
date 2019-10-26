import React from 'react';

class Item extends React.Component{

  removeTodo = e => {
    e.preventDefault();
    this.props.removeTodo(this.props.item);
  };
  toggleComplete = e => {
    e.preventDefault();
    this.props.toggleComplete(this.props.item);
  };
  showDetails = e => {
    e.preventDefault();
    this.props.showDetails(this.props.item);
  }

  render() {
    let { complete, id, text } = this.props.item;
    return (
        <li className={`complete-${complete}`}>
          <span id={id} onClick={this.toggleComplete}>
            {text}
          </span>
          <button className="delete" onClick={this.removeTodo}>delete</button>
          <button className='details' onClick={this.showDetails}>details</button>
        </li>
    )
  }
}

export default Item;
