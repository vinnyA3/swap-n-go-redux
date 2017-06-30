import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './header/Header';
import routes from '../routes';

const App = () =>
  <Router>
    <div>
      <Header />
      {routes}
    </div>
  </Router>;

export default App;
