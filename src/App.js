import React, { Component } from 'react';
import MenuBar from './Components/MenuBar';
import Content from './Components/Content'

class App extends Component {
  render() {
    return (
      <div className="app">
        <MenuBar />
        <Content />
      </div>
    );
  }
}

export default App;