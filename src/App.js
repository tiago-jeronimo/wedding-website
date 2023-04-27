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
              <Route path='/' element={ <Gifts />}/>
              <Route path='/home' element={ <Home />}/>
              <Route path='/presence' element={ <Presence />}/>
          </Routes>
      </Router>
    )
  }
}

export default App;
