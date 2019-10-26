import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.onSubmit} id="todoForm">
        <input id="item" placeholder="Add To Do List Item" ref="todo" required/>
        <input id="assigned-to" placeholder="Assigned to" ref="assignedTo" required/>
        <input id="difficulty" placeholder="3" type="number" min={1} max={5} ref="difficulty" required/>
        <input id="date" type="date" ref="date" required/>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.refs.todo.value, this.refs.assignedTo.value, this.refs.date.value, this.refs.difficulty.value);
  }
}

export default Form;
