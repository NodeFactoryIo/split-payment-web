import React from 'react';
import {connect} from 'react-redux';
import {ethers} from 'ethers';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import SplitIcon from '@material-ui/icons/CallSplit';

import {Avatar} from '../../components/Avatar';

import {Web3Context} from '../../Web3Provider';
import {actions} from '../Home/actions';
import {Header} from "../../components/Header";
import {Menu} from "../../components/Menu";
import {SmallHeader} from "../../components/SmallHeader";
import {Transaction} from "../../components/Transaction";
import {HOME, SPLIT_CONTACTS} from "../../routes";

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

    chooseContacts = () => {
        this.props.history.push(SPLIT_CONTACTS);
    };

    goHome = () => {
        this.props.history.push(HOME);
    };

    render() {
        const {transactions} = this.props;

        return (
            <div>
                <SmallHeader title="Pick transaction to split" goHome={this.goHome}/>
                <div className="container transaction-list">
                    <Transaction onClick={this.chooseContacts}
                                 tx={{to: "0xbD9f96663E07a83ff18915c9074d9dc04d8E64c9", amount: "1000"}}
                                 identity={{name: "Node Factory"}} meta={{currency: 'dai'}}/>
                    <Transaction onClick={this.chooseContacts}
                                 tx={{to: "0x77E3630DEC288c9a477bC430c44d8507068a63D1", amount: "2.1"}}
                                 identity={{name: null}}/>
                    <Transaction onClick={this.chooseContacts}
                                 tx={{to: "0x4ae2be02E9746B39e34029b334320026b842BB83", amount: "4.3"}}
                                 identity={{name: "Dell"}}/>
                    <Transaction onClick={this.chooseContacts}
                                 tx={{to: "0xbaF8f29F82E754Fec7fC45153a6866c989Ff03C4", amount: "1000"}}
                                 identity={{name: "Jana"}} meta={{currency: 'dai'}}/>
                    <Transaction onClick={this.chooseContacts}
                                 tx={{to: "0x4ae2be02E9746B39e34029b334320026b842BB83", amount: "2.394"}}
                                 identity={{name: "Club Mate"}}/>
                </div>
            </div>
            // {/*<List className="transactions-list">*/}
            // {/*  {transactions.map((tx, index) => {*/}
            // {/*    const amount = `${ethers.utils.formatEther(tx.value)} ETH`;*/}
            // {/*    return (*/}
            // {/*      <ListItem key={index}>*/}
            // {/*        <ListItemAvatar>*/}
            // {/*          <Avatar address={tx.to} />*/}
            // {/*        </ListItemAvatar>*/}
            // {/*        <ListItemText primary={tx.hash} secondary={`${tx.to} - ${amount}`} />*/}
            // {/*        <ListItemSecondaryAction>*/}
            // {/*          <IconButton edge="end" aria-label="delete">*/}
            // {/*            <SplitIcon />*/}
            // {/*          </IconButton>*/}
            // {/*        </ListItemSecondaryAction>*/}
            // {/*      </ListItem>*/}
            // {/*    )*/}
            // {/*  })}*/}
            // {/*</List>*/}
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
