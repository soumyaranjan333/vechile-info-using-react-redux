import React from 'react'
import './App.css';
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Add from './components/Add'
import Vechile from './components/Vechile';
import View from './components/View'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h2>vechile Info using React-Redux</h2>
      <Route exact Path='/' component ={Home} />
        <Switch>
          <Route path = '/add' component={Add} />
          <Route path = '/view' component={View} />
          <Route path = '/:id' component ={Vechile} />
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
