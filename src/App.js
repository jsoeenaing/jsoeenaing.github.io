import React from 'react';
import {Header} from './components/header';
import {Body} from './components/Body';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Header/>
        <Body/>
    </div>
  );
}

export default App;
