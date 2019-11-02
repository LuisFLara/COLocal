import React from 'react';
import './App.css';
import Header from './components/Header';
import Title from './components/Title';
import CardContainer from './components/CardContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="main-body">
        <Title><span className="sub">COL</span>ocal</Title>
        <CardContainer />
      </div>
    </div>
  );
}

export default App;
