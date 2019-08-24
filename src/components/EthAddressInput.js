import { ethers } from 'ethers/index';
import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

export const EthAddressInput = ({ addAddress }) => {
  const [typingAddress, setTypingAddress] = useState('');

  const onChangeAddress = (e) => {
    const address = e.target.value;
    if (address.length === 42) {
      try {
        const validAddress = ethers.utils.getAddress(address);
        addAddress(validAddress);
        setTypingAddress('');
      } catch (e) {
        console.error(e);
        alert("Invalid Ethereum address");
      }
    } else {
      setTypingAddress(address);
    }
  }

  return (
    <TextField
      onChange={onChangeAddress}
      label="Friend"
      value={typingAddress}
      placeholder="Enter address..."
      fullWidth
    />
  );
};
