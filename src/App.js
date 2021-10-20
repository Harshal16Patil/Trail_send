import React from 'react';
import './App.css';
import NodePath from './Components/NodePath.jsx';
import NodeDragTry from './Components/NodeDragTry';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
     {/*<NodePath/>*/}
      {<NodeDragTry/>}
    </div>
  );
}

export default App;
