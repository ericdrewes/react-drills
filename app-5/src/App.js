import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={"https://cdn-images-1.medium.com/max/1600/1*uOTifLLIRAxMUIXCO37Qfw.jpeg"} />
      </div>
    );
  }
}

export default App;
