import React from 'react';
import { Hero } from '../../components/Hero';

export class Layout extends React.Component {
  render() {
    return (
      <div>
        <Hero />

        <a className="button is-primary">Request payment</a>


      </div>
    )
  }
}