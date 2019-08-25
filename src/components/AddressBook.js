import React from "react";
import {Contact} from "./Contact";

export function AddressBook({ profiles = [], onChecked }) {

    return(
        <div className="address-book-container">
            {
                profiles.map((profile, index) => (
                    <Contact key={index} profile={profile} onChecked={onChecked} />
                ))
            }
        </div>
    )
}