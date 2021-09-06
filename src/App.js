import React from 'react';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import AboutMe from './components/pages/AboutMe';
import Portfolio from './components/pages/Portfolio';

function App() {
  return (
   <>
   <Router>
      <Navbar />
      <Switch>
        <Route path='/home' exact component={Home} />
        <Route path='/resume' component={Resume} />
        <Route path='/contact' component={Contact} />
        <Route path='/about-me' component={AboutMe} />
        <Route path='/portfolio' component={Portfolio} />
      </Switch>
      </Router>
      </>
  );
}

export default App;
