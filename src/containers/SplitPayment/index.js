import React from 'react';
import { SplitForm } from './SplitForm';

export class RequestPayment extends React.Component {
  render() {
    return (
      <div>
        <SplitForm amount={1000} />
      </div>
    )
  }
}