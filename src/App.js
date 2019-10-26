import React from 'react';
import './styles/app.scss';
import Header from './components/header';
import List from './components/list';
import Form from './components/form';
import Details from './components/details';

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
      <Details item={this.state.itemToDetail} closeDetails={this.closeDetails} />
      <Header count={this.state.items.length}/>
      <Form addTodo={this.addTodo}/>
      <List removeTodo={this.removeTodo} items={this.state.items} toggleComplete={this.toggleComplete} showDetails={this.showDetails}/>
      </>
  );
  }
  addTodo = (newTodo, assignedTo, date, difficulty) => {
    this.setState(state => {
      state.items.push({text: newTodo, id: id++, assignedTo, difficulty, date, complete: false});
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
  showDetails = todo => {
    this.setState(state => state.itemToDetail = todo);
  }
  closeDetails = () => {
    this.setState(state => delete state.itemToDetail);
    }
  }

export default App;
