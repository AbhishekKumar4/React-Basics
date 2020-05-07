import React from 'react';
import './App.css';
import Hello from './components/Hello'
import HelloClassComp from './components/HelloClassComp'
import HelloPure from './components/HelloPureRct'
import CustomProps from './components/CustomProps'
import HelloStExample from './components/HelloStExample'

function App() {
  return (
    <div className="App">
     {/* <Hello />
      <HelloClassComp />
      <HelloPure />
      <CustomProps test = "This is prop"> This is child text</CustomProps>*/}
    <HelloStExample />
  </div>
  );
}

export default App;
