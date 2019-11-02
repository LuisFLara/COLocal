import React from 'react';
import './App.css';
import Header from './components/Header';
import Title from './components/Title';
import CardContainer from './components/CardContainer';

function App() {
  return (
    <div className="App">
      <Header><img src="img/COLocal.png" alt="COLocal" className="colocal-img-1" /></Header>
      <div id="main-body">
        <Title><img src="img/COLocal2.png" alt="COLocal2" className="colocal-img-2" /></Title>
        <CardContainer />
      </div>
    </div>
  );
}

export default App;
