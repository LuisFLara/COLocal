import React from 'react';
import './App.css';
import Header from './components/Header';
import CardContainer from './components/CardContainer';
import Hero from './components/Hero';
import { all } from './services/colocal_api';

all();

function App() {
  return (
    <div className="App">
      <Header/>
      <div id="main-body">
        <Hero />
        <CardContainer />
      </div>
    </div>
  );
}

export default App;
