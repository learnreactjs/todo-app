import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Todo from './pages/Todo';
import Redux from './pages/Redux';

function App() {
  return (
    <Router>
      <div className="wrapper">
        <div className="sidebar col-2 bg-dark">
          <nav>
            <div className="sidebar-list">
              <div>
                <Link to="/">Todo</Link>
              </div>
              <div>
                <Link to="/redux">Redux</Link>
              </div>
            </div>
          </nav>
        </div>

        <div className="content col-10">
          <Route path="/" exact component={Todo} />
          <Route path="/redux" component={Redux} />
        </div>
      </div>
    </Router>
    )
}

export default App;
