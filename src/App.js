import React from 'react';
import './App.css';
import Header from './components/Header';
import CardContainer from './components/CardContainer';
import BrandContainer from './components/BrandContainer';
import Notices from './components/Notices';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Hero from './components/Hero';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

const Brand = () => {
  let { brandId } = useParams();
  return  <BrandContainer id={brandId} />
}

const App = () => {
  return(
  <Router>
      <Header/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/ShowBrands">
          <CardContainer />
        </Route>
        <Route path={`/ShowBrand/:brandId`}>
          <Brand />
        </Route>
        <Route path="/SignUp">
          <SignUp />
        </Route>
        <Route path="/SignIn">
          <SignIn />
        </Route>
        <Route path="/">
          <Hero />
          <Notices />
          <h2 className="text-center">Nuestras marcas:</h2>
          <CardContainer />
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
