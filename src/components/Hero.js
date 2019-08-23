import React from 'react';
import { Link } from "react-router-dom";
import { REQUEST_PAYMENT_ROUTE } from '../routes';

export function Hero() {
  return (
    <section className="hero is-medium is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            SplitETH
          </h1>
          <h2 className="subtitle">
            Split your expenses any time
          </h2>

          <Link
            to={REQUEST_PAYMENT_ROUTE}
            className="button is-link"
          >
            Request payment
          </Link>
        </div>
      </div>
    </section>
  )
}