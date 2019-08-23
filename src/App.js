import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import './styles/index.scss';
import { Home } from './containers/Home';
import { RequestPayment } from './containers/RequestPayment';
import { REQUEST_PAYMENT_ROUTE } from './routes';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path={REQUEST_PAYMENT_ROUTE} component={RequestPayment} />
    </BrowserRouter>
  );
}

export default App;
