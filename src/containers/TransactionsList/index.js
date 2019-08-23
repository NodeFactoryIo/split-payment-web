import React from 'react';
import { connect } from 'react-redux';

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
    return (
      <div>

      </div>
    )
  }
}

export default connect(null, {
  requestETHTransactions: actions.requestETHTransactions,
})(TransactionsList);
