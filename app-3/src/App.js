import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      baseballTeams: [
        "Chicago Cubs",
        "Cleveland Indians",
        "New York Yankees",
        "Boston Red Sox",
        "Houston Astros"
      ],
      message: ''
    }
  }

  handleChange(filter){
    this.setState({filterString: filter});
  }

  render() {
    let baseballTeamsToDisplay = this.state.baseballTeams.filter( (element, i) => {
    return element.includes(this.state.filterString);
     }).map( (element, i) => {
      return <h1 key = {i}>{ element} </h1>
    })
    return (
      <div className="App">
        <input onChange = { (event) => this.handleChange(event.target.value)}
               type = "text"
        />
            {baseballTeamsToDisplay}
      </div>
    );
  }
}

export default App;
