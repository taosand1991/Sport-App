import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Team from './components/Team'
import Home from './components/Home'
import Player from './playersComponents/Player'

function App() {
  return (
    
    <div>
    <Navbar/>
    <Switch>
    <Route path='/contact' render={()=> <Contact/> }/>
    <Route path='/team' component={Team}/>
    <Route path='/player'   component={Player}/>
    <Route path='/' render={()=> <Home/>}/>
    
    
    </Switch>
    </div>
    
  );
}

export default App;
