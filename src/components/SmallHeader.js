import React from 'react';

export function SmallHeader({title, goHome}) {
    return (
        <section className="small-header" >
            <div className="hero-body">
                <img className="hero-logo" onClick={goHome} src={require("../assets/img/split-network-mini.png")} />
                <span className="hero-title">{title}</span>
            </div>
        </section>
    )
}