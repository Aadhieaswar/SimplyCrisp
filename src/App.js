import React, { Component } from 'react';
import './App.css';
import Content from './Content/Content';

// components
import Navbar from './Layout/Navbar/Navbar';

export default class App extends Component {
  render() {
    return (
      <div className="container content">
        <Navbar />
        <Content />
      </div>
    );
  }
}
