import React from 'react';
import { Button, Link, Chip } from '@material-ui/core';

import { EthAddressInput } from '../../components/EthAddressInput';
import { AddressBook } from '../AddressBook';

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
    this.onSelectedItems = this.onSelectedItems.bind(this);
    this.removeAddress = this.removeAddress.bind(this);
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

  onSelectedItems(selectedItems) {
    this.setState({ addresses: [...this.state.addresses, ...selectedItems] });
  }

  removeAddress(address) {
    const { addresses } = this.state;

    const newAddresses = [...addresses];
    newAddresses.splice(addresses.indexOf(address), 1);
    this.setState({ addresses: newAddresses });
  }

  render() {
    const { addresses, requestedAmount, openAddressBook } = this.state;

    return (
      <div className="payment-form">
        {addresses.length === 0 ? null : <h3>SplittETH with:</h3>}

        <div className="row margin-5">
          {addresses.map(address => (
            <Chip
              key={address}
              size="small"
              label={address}
              onDelete={(e) => this.removeAddress(e.target.value)}
            />
          ))}
        </div>

        <EthAddressInput addAddress={this.addAddress} />

        <AddressBook
          onSelectedItems={this.onSelectedItems}
          visible={openAddressBook}
          onClose={this.toggleAddressBook}
        />

        <Link
          style={openAddressBook ? { display: 'none' } : {}}
          href="#"
          onClick={this.toggleAddressBook}
        >
          ...or choose in address book
        </Link>

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
