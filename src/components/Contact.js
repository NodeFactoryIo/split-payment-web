import React from "react";
import {Avatar} from "./Avatar";
import {Checkbox} from "@material-ui/core";

export function Contact({profile}) {

    function getAvatar(profile) {
        if(profile.image) {
            return (
                <Avatar className="avatar" imageHash={profile.image[0].contentUrl['/']}/>
            );
        } else {
            return (
                <Avatar size={10} scale={10} className="avatar" address={profile.address} />
            )
        }
    }

    function checkContact(address) {

    }

    return (
        <div className="contact round-container" onClick={checkContact}>

            {
                getAvatar(profile)
            }

            <div className="person">
                <span className="name">{profile.name || `${profile.address.substring(0, 7)}...${profile.address.substring(profile.address.length - 5)}`}</span>
                <span className="address">{profile.address}</span>
            </div>
            <div className="right">
                <Checkbox color="#3D67FF"/>
            </div>
        </div>
    )

}