import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Presence from './Pages/Presence'
import Gifts from './Pages/Gifts'
import React from 'react';


class App extends React.Component {
  render(){
    return(
      <Router>
          <Routes>
              <Route path='/' element={ <Home />}/>
              <Route path='/presence' element={ <Presence />}/>
              <Route path='/gifts' element={ <Gifts />}/>
          </Routes>
      </Router>
    )
  }
}

export default App;
