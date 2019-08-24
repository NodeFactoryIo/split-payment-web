import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import './styles/index.scss';
import { Home } from './containers/Home';
import {REQUEST_PAYMENT_ROUTE, SPLIT_CONTACTS, SPLIT_PAYMENT_ROUTE} from './routes';
import {TransactionsList} from "./containers/TransactionsList";
import {AddressBookContainer} from "./containers/AddressBook";

function App() {
  return (
      <div className={"body"}>
          <CssBaseline />
          <BrowserRouter>
              <Route exact path="/" component={Home} />
              {/*<Route exact path={REQUEST_PAYMENT_ROUTE} component={RequestPayment} />*/}
              <Route exact path={SPLIT_PAYMENT_ROUTE} component={TransactionsList} />
              <Route exact path={SPLIT_CONTACTS} component={AddressBookContainer} />
          </BrowserRouter>
      </div>
  );
}

export default App;
