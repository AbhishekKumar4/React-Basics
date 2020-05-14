import React from 'react';
import './App.css';
import Hello from './components/Hello'
import HelloClassComp from './components/HelloClassComp'
import HelloPure from './components/HelloPureRct'
import CustomProps from './components/CustomProps'
import HelloStExample from './components/HelloStExample'
import Counter from './components/Counter'
import DestructuringProps from './components/DestructuringProps'
import CoditionalRender from './components/ConditionalRender'
import PersonList from './components/ListPerson'
import PersonList2 from './components/PersonList2'

function App() {
  return (
    <div className="App">
     {/* <Hello />
      <HelloClassComp />
      <HelloPure />
      <CustomProps test = "This is prop"> This is child text</CustomProps>
     <HelloStExample />
     <DestructuringProps test = "This is prop"> This is child text</DestructuringProps>
      <Counter />
     <CoditionalRender /> */}
     <PersonList2 />
  </div>
  );
}

export default App;
