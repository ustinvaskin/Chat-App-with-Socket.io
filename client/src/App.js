import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'


import Home from './components/Home'
import Join from './components/Join'
import Chat from './components/Chat'

const App = () => (
  <Router>
    <Route path='/' exact component={Home} />
    {/* Get the data to later on pass it  */}
    <Route path='/join' component={Join} />
    <Route path='/chat' component={Chat} />
  </Router>
);
export default App;