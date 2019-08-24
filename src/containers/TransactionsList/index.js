import React from 'react';
import { connect } from 'react-redux';
import { ethers } from 'ethers';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
      <List>
        {transactions.map((tx, index) => {
          const amount = `${ethers.utils.formatEther(tx.value)} ETH`;
          return (
            <ListItem key={index}>
              <ListItemText primary={tx.hash} secondary={`${tx.to} - ${amount}`} />
            </ListItem>
          )
        })}
      </List>
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
