import React from 'react';
import './App.css';
import Nav from './Nav.js';
import Facts from './Facts.js';
import About from './About.js';
import Fact from "./Fact.js";
import {BrowserRouter as Router, Switch, Route  } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/about" component={About}/>
        <Route path="/facts" component={Facts} exact/>
        <Route path="/facts/:factId" component={Fact}/>
      </Switch>
    </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;
