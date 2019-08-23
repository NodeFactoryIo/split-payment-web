import React from 'react';
import { Hero } from '../../components/Hero';
import { Web3Provider } from '../../Web3Provider';
import { TransactionsList } from '../TransactionsList';

export class Home extends React.Component {
  render() {
    return (
      <div>
        <Hero />

        <Web3Provider>
          <TransactionsList/>
        </Web3Provider>

        <footer>Powered by Etherscan.io APIs</footer>
      </div>
    )
  }
}
