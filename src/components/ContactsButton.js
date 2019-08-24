import React from "react";

export function ContactsButton({count, onClick}) {

    return(
        <div className="contact-button round-container" onClick={onClick}>
            <span className="title">Split</span>
            <span className="description">{`Selected ${count} contacts`}</span>
        </div>
    )
}