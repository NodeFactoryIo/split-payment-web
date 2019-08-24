import React from 'react';
import { connect } from 'react-redux';
import { ethers } from 'ethers';

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
