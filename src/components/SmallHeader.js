import React from 'react';

export function SmallHeader({title, goHome, rightButton = null}) {
    return (
        <section className="small-header" >
            <div className="hero-body">
                <img className="hero-logo" onClick={goHome} src={require("../assets/img/split-network-mini.png")} />
                <span className="hero-title">{title}</span>
                <div className="right">
                    {rightButton}
                </div>
            </div>
        </section>
    )
}