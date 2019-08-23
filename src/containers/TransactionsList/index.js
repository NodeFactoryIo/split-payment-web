import React from 'react';
import { Web3Context } from '../../Web3Provider';

export class TransactionsList extends React.Component {
  static contextType = Web3Context;

  componentDidMount() {
    const { provider } = this.context;

    provider.listAccounts().then((accounts) => {
      console.log(accounts);
    });
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}