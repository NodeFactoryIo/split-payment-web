import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import './styles/index.scss';
import { Home } from './containers/Home';
import { RequestPayment } from './containers/RequestPayment';
import { REQUEST_PAYMENT_ROUTE } from './routes';

function App() {
  return (
    <div>
      <CssBaseline />

      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path={REQUEST_PAYMENT_ROUTE} component={RequestPayment} />
      </BrowserRouter>
    </div>
  );
}

export default App;
