import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import './App.css'; 


export default  function App() {
  return (
    
    <div className="App">
    <Router>
    <Route path="/" exact component={Home} />
    </Router>
    
    </div>
   
  );
}

;
