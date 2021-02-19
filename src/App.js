import React from 'react';
import profileImage from './img/profilepic.png';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={profileImage} alt="profile-image"/>
      <h1>J Soe Naing</h1>
      <h2>Computing science student at Simon Fraser University</h2>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact />
        </Switch>
        </Router>
    </div>
  );
}

export default App;
