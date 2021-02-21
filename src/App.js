import React from 'react';
import {Header} from './components/header';
import profileImage from './img/profilepic.png';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <img src={profileImage} alt="profile-image"/>
      <Header/>
        <Navbar/>
    </div>
  );
}

export default App;
