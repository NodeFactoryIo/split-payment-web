import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import './styles/index.scss';
import { Home } from './containers/Home';
import { RequestPayment } from './containers/RequestPayment';
import {REQUEST_PAYMENT_ROUTE, SPLIT_PAYMENT_ROUTE} from './routes';
import {TransactionsList} from "./containers/TransactionsList";

function App() {
  return (
      <div className={"body"}>
          <CssBaseline />
          <BrowserRouter>
              <Route exact path="/" component={Home} />
              <Route exact path={REQUEST_PAYMENT_ROUTE} component={RequestPayment} />
              <Route exact path={SPLIT_PAYMENT_ROUTE} component={TransactionsList} />
          </BrowserRouter>
      </div>
  );
}

export default App;
