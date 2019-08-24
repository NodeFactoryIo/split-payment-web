import React from "react";
import {Contact} from "./Contact";

export function AddressBook({profiles=[]}) {

    return(
        <div className="address-book-container">
            {
                profiles.map((profile) => (
                    <Contact profile={profile}/>
                ))
            }
        </div>
    )
}