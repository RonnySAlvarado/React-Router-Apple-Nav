import React, { Component } from 'react';
import appleData from "./appleData";
import { Route } from 'react-dom-router';
import AppleNav from './AppleNav';
import './App.css';

class App extends Component {
  constructor(){
    this.state = {
      data: []
    }
  }

  componentDidMount () {
    this.setState ({ data: appleData });
  }


  render() {
    return (
      <div className="App">
        <Route path="/" render={ () => (<AppleNav data={this.state.data}/>)} />
      </div>
    );
  }
}

export default App;
