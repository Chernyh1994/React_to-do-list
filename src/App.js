import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Header from './component/header/header';
import Main from './component/main/main';
import Main_ivent from './component/main/main_ivent/main_ivent';
import Main_task from './component/main/main_task/main_task';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="block">
            <Router>
              <nav className="nav"> 
                <ul className="header_list">
                  <li className="header_list__item ">
                    <Link className="header_list__link" to="/Home/">Home</Link>
                  </li>
                  <li className="header_list__item ">
                    <Link className="header_list__link" to="/">Ivent</Link>
                  </li>
                  <li className="header_list__item li">
                    <Link className="header_list__link" to="/Task/">Task book</Link>
                  </li>
                </ul>
            <Header />
              </nav>
            <Route path="/Home/" exact component={Main} />
            <Route path="/" exact component={Main_ivent} />
            <Route path="/Task/" exact component={Main_task} />
            </Router>
          </div>
      </div>
    );
  }
}

export default App;
