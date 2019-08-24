import React from 'react';
import { ethers } from 'ethers';
import { EthAddressInput } from '../../components/EthAddressInput';

export class RequestPaymentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addresses: [],
    };

    this.addAddress = this.addAddress.bind(this);
  }

  addAddress(address) {
    this.setState({ addresses: [...this.state.addresses, address] });
  }

  render() {
    const { addresses } = this.state;

    return (
      <div>
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
      </div>
    )
  }
}
