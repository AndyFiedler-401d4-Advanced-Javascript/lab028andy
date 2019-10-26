import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.onSubmit} id="todoForm">
        <input id="item" placeholder="Add To Do List Item" ref="todo" />
      </form>
    )
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.refs.todo.value);
  }
}

export default Form;
