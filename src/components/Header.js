import React from 'react';

export function Header() {
  return (
    <section >
      <div className="hero-body">
        <img className="hero-logo" src={require("../assets/img/split-network.png")} />

          <p className="hero-tagline">Split the bill or request a crypto payment <b>directly</b> from your contacts</p>
      </div>
    </section>
  )
}