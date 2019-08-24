import React from 'react';
import Button from '@material-ui/core/Button';

export function Hero({ onRequestClick }) {
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

          <Button
            onClick={onRequestClick}
            variant="contained"
            color="primary"
          >
            Request payment
          </Button>
        </div>
      </div>
    </section>
  )
}