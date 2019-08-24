import React from 'react';
import {Avatar} from "./Avatar";

export function Transaction({tx, identity, meta={}}) {
    return (
        <div className="transaction round-container">
            <Avatar size={10} scale={10} className="avatar" address={tx.to} />
            <div className="recipient">
                <span className="name">{identity.name || tx.to}</span>
                <span className="address">{identity.name === null ? "" : tx.to}</span>
            </div>
            <div className="right">
                <div className="amount">
                    <span className="number">{tx.amount}</span>
                    <img className="currency-icon" src={require(`../assets/img/${meta.currency || "eth"}.png`)} />
                </div>
            </div>
        </div>
    )
}