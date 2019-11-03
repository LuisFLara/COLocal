import React from 'react';
import './App.css';
import Header from './components/Header';
import UserHeader from './components/UserHeader';
import CardContainer from './components/CardContainer';
import BrandContainer from './components/BrandContainer';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Hero from './components/Hero';
import Contact from './components/Contact.js';
import Categories from './components/Categories'
import NewBrandForm from './components/NewBrandForm';
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

const HeaderSwitch = () => {
  if(localStorage.getItem("user") !== "null"){
    return <UserHeader />;
  }
  return <Header />;
}

const App = () => {
  return(
  <Router>
      <HeaderSwitch/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/NewBrand">
          <NewBrandForm />
        </Route>
        <Route path="/ShowBrands">
          <div className="mt-5 pt-5 d-flex" id="#brands">
            <CardContainer />
          </div>
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
          <h2 className="text-center">Nuestras marcas:</h2>
          <CardContainer />
          <Categories/>
          <Contact />
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
