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
      ]
    }
  }
  render() {
    let baseballTeamsToDisplay = this.state.baseballTeams.map( (element, i) => {
      return <h1 key = {i}>{ element} </h1>
    })
    return (
      <div className="App">
            {baseballTeamsToDisplay}
      </div>
    );
  }
}

export default App;
