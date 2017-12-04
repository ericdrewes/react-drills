import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo.js'

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
      let list = this.state.list.map( (element, index) => {
        return(
          <Todo key={index} 
                task={element}
          />
        )
      })
    return (
      <div className="App">
        <h1> My To-Do List: </h1>
          <div>
              <input value = {this.state.input}
                     placeholder="Enter New Task"
                     onChange={(e)=> this.handleInputChange(e.target.value)}
              />
              <button onClick = {this.handleAddTask}>ADD</button>
          </div>

          <br />
          {list}
      </div>
    );
  }
}

export default App;
