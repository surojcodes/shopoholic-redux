import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Usage from './pages/Usage';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import store from './store';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/usage' component={Usage} />
          <Route exact path='/about' component={About} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
