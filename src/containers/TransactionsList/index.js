import React from 'react';
import {connect} from 'react-redux';

import {Web3Context} from '../../Web3Provider';
import {actions} from '../Home/actions';
import {SmallHeader} from "../../components/SmallHeader";
import {Transaction} from "../../components/Transaction";
import {HOME, SPLIT_CONTACTS} from "../../routes";

class TransactionsList extends React.Component {
    static contextType = Web3Context;

    componentWillMount() {
      const { provider } = this.context;
      const { requestETHTransactions } = this.props;

      provider.listAccounts().then((accounts) => {
        requestETHTransactions(accounts[0]);
      });
    }

    chooseContacts = () => {
        this.props.history.push(SPLIT_CONTACTS);
    };

    goHome = () => {
        this.props.history.push(HOME);
    };

    getTx = (tx) => {
        return (
            <Transaction onClick={this.chooseContacts}
                         tx={tx}
                         identity={tx.identity}
                         meta={{currency: 'eth'}}/>
        );
    };

    render() {
        const {transactions} = this.props;
        console.log(transactions);
        return (
            <div>
                <SmallHeader title="Pick transaction to split" goHome={this.goHome}/>
                <div className="container transaction-list">
                    {
                        transactions.map(this.getTx)
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        transactions: state.user.transactions || [],
    }
};

export default connect(mapStateToProps, {
    requestETHTransactions: actions.requestETHTransactions,
})(TransactionsList);
