import React from 'react';
import './styles/app.scss';
import Header from './components/header';
import List from './components/list';
import Form from './components/form';

let id = 0;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
  }
  render() {
    return (
      <>
      <Header count={this.state.items.length}/>
      <Form addTodo={this.addTodo}/>
      <List removeTodo={this.removeTodo} items={this.state.items} toggleComplete={this.toggleComplete}/>
      </>
  );
  }
  addTodo = (newTodo) => {
    this.setState(state => {
      state.items.push({text: newTodo, id: id++, complete: false});
      return state;
    })
  }
  removeTodo = (toRemove) => {
    this.setState(state => {
      state.items = state.items.filter(item => item.id !== toRemove.id);
      return state;
    });
  }
  toggleComplete = (todo) => {
    this.setState(state => {
      todo.complete = !todo.complete;
      return state;
    })
  }
}

export default App;
