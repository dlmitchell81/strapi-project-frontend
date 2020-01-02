import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './containers/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.scss';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        {/* <Route path="/product/:id" component={Product} /> */}
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
