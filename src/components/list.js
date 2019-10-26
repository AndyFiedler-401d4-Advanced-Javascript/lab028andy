import React from 'react';
import Item from './item';

class List extends React.Component {
  render() {
    return (
      <ul id='items'>
        {this.props.items.map(item => (
          <Item item={item} key={item.id} removeTodo={this.props.removeTodo} toggleComplete={this.props.toggleComplete}/>
        ))}
      </ul>
    )
  }
}

export default List;
