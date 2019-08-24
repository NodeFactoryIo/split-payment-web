import React from 'react';
import { connect } from 'react-redux';
import { ethers } from 'ethers';

import { Web3Context } from '../../Web3Provider';
import { actions } from '../Home/actions';

class TransactionsList extends React.Component {
  static contextType = Web3Context;

  componentDidMount() {
    const { provider } = this.context;
    const { requestETHTransactions } = this.props;

    provider.listAccounts().then((accounts) => {
      requestETHTransactions(accounts[0]);
    });
  }

  render() {
    const { transactions } = this.props;

    return (
      <div>
        {transactions.map((tx, index) => {
          return (
            <div key={index}>
              <span>{tx.hash}</span><br />
              <span>{tx.to}</span><br />
              <span>{ethers.utils.formatEther(tx.value)} ETH</span><br /><br />
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    transactions: state.user.transactions,
  }
};

export default connect(mapStateToProps, {
  requestETHTransactions: actions.requestETHTransactions,
})(TransactionsList);
