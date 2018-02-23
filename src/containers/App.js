import React from 'react';
import './App.css';
import Nav from '../components/Nav';
import Canvas from '../components/Canvas';

class App extends React.Component {
	state = {}

  render() {
    return (
      <div className="App">
        <Nav />
        <Canvas />
      </div>
    );
  }
}

export default App;
