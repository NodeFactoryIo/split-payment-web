import React from 'react';
import { Button, Link } from '@material-ui/core';

import { EthAddressInput } from '../../components/EthAddressInput';
import { Modal } from '../../components/Modal';

export class RequestPaymentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addresses: [],
      requestedAmount: 0,
      openAddressBook: false,
    };

    this.addAddress = this.addAddress.bind(this);
    this.toggleAddressBook = this.toggleAddressBook.bind(this);
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

  toggleAddressBook() {
    this.setState({ openAddressBook: !this.state.openAddressBook })
  }

  renderAddressBook() {
    const { openAddressBook } = this.state;
    if (!openAddressBook) return null;

    return (
      <Modal
        onClose={this.toggleAddressBook}
        isOpen={openAddressBook}
      >
        <span>just some modal content</span>
      </Modal>
    )
  }

  render() {
    const { addresses, requestedAmount } = this.state;

    return (
      <div className="payment-form">
        {addresses.length === 0 ? null : <h3>SplittETH with:</h3>}
        {addresses.map(address => (
          <div className="tag" key={address}>
            {address}
          </div>
        ))}

        <EthAddressInput addAddress={this.addAddress} />
        <Link href="#" onClick={this.toggleAddressBook}>
          ...or choose in address book
        </Link>

        {this.renderAddressBook()}

        {!!requestedAmount ?
          <div>
            <label className="label">Amount to be requested</label>
            <span>{requestedAmount}</span>
          </div>
        : null}

        <Button variant="contained" color="primary">
          Request
        </Button>
      </div>
    )
  }
}
