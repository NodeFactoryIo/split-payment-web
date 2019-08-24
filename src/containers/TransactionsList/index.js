import React from 'react';
import { connect } from 'react-redux';
import { ethers } from 'ethers';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import SplitIcon from '@material-ui/icons/CallSplit';

import { Avatar } from '../../components/Avatar';

import { Web3Context } from '../../Web3Provider';
import { actions } from '../Home/actions';
import {Header} from "../../components/Header";
import {Menu} from "../../components/Menu";
import {SmallHeader} from "../../components/SmallHeader";
import {Transaction} from "../../components/Transaction";

export class TransactionsList extends React.Component {
  static contextType = Web3Context;

  // componentDidMount() {
  //   const { provider } = this.context;
  //   const { requestETHTransactions } = this.props;
  //
  //   provider.listAccounts().then((accounts) => {
  //     requestETHTransactions(accounts[0]);
  //   });
  // }

  render() {
    const { transactions } = this.props;

    return (
      {/*<List className="transactions-list">*/}
      {/*  {transactions.map((tx, index) => {*/}
      {/*    const amount = `${ethers.utils.formatEther(tx.value)} ETH`;*/}
      {/*    return (*/}
      {/*      <ListItem key={index}>*/}
      {/*        <ListItemAvatar>*/}
      {/*          <Avatar address={tx.to} />*/}
      {/*        </ListItemAvatar>*/}
      {/*        <ListItemText primary={tx.hash} secondary={`${tx.to} - ${amount}`} />*/}
      {/*        <ListItemSecondaryAction>*/}
      {/*          <IconButton edge="end" aria-label="delete">*/}
      {/*            <SplitIcon />*/}
      {/*          </IconButton>*/}
      {/*        </ListItemSecondaryAction>*/}
      {/*      </ListItem>*/}
      {/*    )*/}
      {/*  })}*/}
      {/*</List>*/}
        <div>
          <SmallHeader title="Pick transaction to split"/>
          <div  className="container transaction-list">
            <Transaction />
          </div>
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
