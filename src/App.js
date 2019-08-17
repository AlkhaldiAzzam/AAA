import React from 'react';
import Drama from './Drama';
import Comdia from './Comdia'
import Horror from './Horror'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import Home from './Home'



export default function App() {
    return (
   
      <Router>
        <nav>
          
          <Link to="/">Home</Link>{' '}
          <Link to="/Drama">Drama</Link>{' '}
          <Link to="/Comdia">Comdia </Link>{' '}
     <Link to="/Horror">  Horror</Link>
        </nav>
  
        <div>
            <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Drama" component={Drama} />
          <Route path="/Comdia" component={Comdia} />
          <Route path="/Horror" component={Horror} />
          <Route component={Home} />
          </Switch>
        </div>
      </Router>
   
    );
  }
  
