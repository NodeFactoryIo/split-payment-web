import React from 'react';

import { Hero } from '../../components/Hero';
import { REQUEST_PAYMENT_ROUTE } from '../../routes';
import { Web3Provider } from '../../Web3Provider';
import TransactionsList from '../TransactionsList';

export class Home extends React.Component {
  render() {
    const { history } = this.props;

    return (
      <div>
        <Hero onRequestClick={() => history.push(REQUEST_PAYMENT_ROUTE)} />

        <Web3Provider>
          <TransactionsList/>
        </Web3Provider>

        <footer>Powered by Etherscan.io APIs</footer>
      </div>
    )
  }
}
