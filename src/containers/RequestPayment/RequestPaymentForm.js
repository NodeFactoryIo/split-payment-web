import React from 'react';
import { EthAddressInput } from '../../components/EthAddressInput';
import { REQUEST_PAYMENT_ROUTE } from '../../routes';

export class RequestPaymentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addresses: [],
      requestedAmount: 0,
    };

    this.addAddress = this.addAddress.bind(this);
  }

  addAddress(address) {
    this.setState({ addresses: [...this.state.addresses, address] });

    this.calculateSplitAmount(this.state.addresses.length + 1);
  }

  calculateSplitAmount(numberOfAddresses) {
    const { amount } = this.props;

    const requestedAmount = amount / (numberOfAddresses + 1);
    this.setState({ requestedAmount });
  }

  render() {
    const { addresses, requestedAmount } = this.state;

    return (
      <div className="payment-form">
        {addresses.map(address => (
          <span className="tag" key={address}>
            {address}
          </span>
        ))}

        <div className="field">
          <label className="label">Friend</label>
          <div className="control">
            <EthAddressInput addAddress={this.addAddress} />
          </div>
        </div>

        {!!requestedAmount ?
          <div>
            <label className="label">Amount to be requested</label>
            <span>{requestedAmount}</span>
          </div>
        : null}

        <button className="button is-link">
          Request
        </button>
      </div>
    )
  }
}
