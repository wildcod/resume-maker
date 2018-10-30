import React, { Component } from 'react';
import Home from './components/Router/Router'
import {BrowserRouter} from 'react-router-dom'
import './App.css';

class App extends Component {

  render() {
    return (

       <BrowserRouter>
         <Home/>
      </BrowserRouter>
    );
  }
}

export default App;
