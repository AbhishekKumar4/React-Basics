import React from 'react';
import './App.css';
import Hello from './components/Hello'
import HelloClassComp from './components/HelloClassComp'
import HelloPure from './components/HelloPureRct'

function App() {
  return (
    <div className="App">
      <Hello />
      <HelloClassComp />
      <HelloPure />
    </div>
  );
}

export default App;
