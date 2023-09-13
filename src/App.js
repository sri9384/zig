import React from 'react';
import './App.css';
import HomePage from './HomePage';
import Dashboard from './Dashboard';
import ClientPage from './components/ClientPage';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';
import Page6 from './components/Page6';
import Page7 from './components/Page7';
import Page8 from './components/Page8';
import Page9 from './components/Page9';
import Page10 from './components/Page10';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/client" component={ClientPage} />
          <Route path="/Page2" component={Page2} />
          <Route path="/Page3" component={Page3} />
          <Route path="/Page4" component={Page4} />
          <Route path="/Page5" component={Page5} />
          <Route path="/Page6" component={Page6} />
          <Route path="/Page7" component={Page7} />
          <Route path="/Page8" component={Page8} />
          <Route path="/Page9" component={Page9} />
          <Route path="/Page10" component={Page10} />
         
        </Switch>
        <nav>
          <ul>
            
           
            
          </ul>
        </nav>
      </div>
    </Router>
  );
}

export default App;