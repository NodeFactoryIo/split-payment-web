import React from 'react';
import { RequestPaymentForm } from './RequestPaymentForm';

export class RequestPayment extends React.Component {
  render() {
    return (
      <div>
        <RequestPaymentForm amount={1000} />
      </div>
    )
  }
}