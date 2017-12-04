import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo.js'
import NewTask from './NewTask';
import List from './List';

class App extends Component {
    constructor(){
      super();

      this.state= {
        list: [],
        input: ''
      };

      this.handleAddTask = this.handleAddTask.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(val){
      this.setState({input: val});
    }
    handleAddTask(){
      this.setState({
        list: [...this.state.list, this.state.input]
      });
    }

    
  render() {
    return (
      <div className="App">
        <h1> My To-Do List: </h1>
        <NewTask add={this.handleAddTask} />
        <List tasks={this.state.list} />
      </div>
    );
  }
}

export default App;

