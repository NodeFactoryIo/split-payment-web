import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import './styles/index.scss';
import {Home} from './containers/Home';
import {SPLIT_CONTACTS, SPLIT_PAYMENT_ROUTE, SPLIT_SUCCESS} from './routes';
import TransactionsList from "./containers/TransactionsList";
import {AddressBookContainer} from "./containers/AddressBook";
import {SplitSuccess} from "./containers/Success";
import {Web3Provider} from "./Web3Provider";

function App() {
  return (
      <Web3Provider>
          <div className={"body"}>
              <CssBaseline />
              <BrowserRouter>
                  <Route exact path="/" component={Home} />
                  {/*<Route exact path={REQUEST_PAYMENT_ROUTE} component={RequestPayment} />*/}
                  <Route exact path={SPLIT_PAYMENT_ROUTE} component={TransactionsList} />
                  <Route exact path={SPLIT_CONTACTS} component={AddressBookContainer} />
                  <Route exact path={SPLIT_SUCCESS} component={SplitSuccess} />
              </BrowserRouter>
          </div>
      </Web3Provider>
  );
}

export default App;
