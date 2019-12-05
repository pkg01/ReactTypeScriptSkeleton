import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App/App';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Route path="/" component={App} />
    </Router>
  );
};

export default AppRouter;
