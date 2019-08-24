import React from 'react';
import {Avatar} from "./Avatar";
import {ethers} from "ethers";

export function Transaction({tx, identity, meta={}, onClick}) {

    function getAvatar(profile, address) {
        if(profile.image) {
            return (
                <Avatar className="avatar" imageHash={profile.image[0].contentUrl['/']}/>
            );
        } else {
            return (
                <Avatar size={10} scale={10} className="avatar" address={address} />
            )
        }
    }

    return (
        <div className="transaction round-container" onClick={onClick}>
            {/*<Avatar size={10} scale={10} className="avatar" address={tx.to} />*/}
            {getAvatar(identity, tx.to)}
            <div className="recipient">
                <span className="name">{identity.name || tx.to}</span>
                <span className="address">{identity.name === null ? "" : tx.to}</span>
            </div>
            <div className="right">
                <div className="amount">
                    <span className="number">{`${ethers.utils.formatEther(tx.value)}`}</span>
                    <img className="currency-icon" src={require(`../assets/img/${meta.currency || "eth"}.png`)} />
                </div>
            </div>
        </div>
    )
}