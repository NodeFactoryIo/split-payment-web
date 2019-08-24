import React from 'react';
import {Header} from '../../components/Header';
import {Menu} from "../../components/Menu";
import {SPLIT_PAYMENT_ROUTE} from "../../routes";

export class Home extends React.Component {

    splitTransactionChosen = () => {
        this.props.history.push(SPLIT_PAYMENT_ROUTE);
    };

    render() {
        return (
            <div>
                <Header/>
                <Menu onSplitChoose={this.splitTransactionChosen}/>
            </div>
        )
    }
}
