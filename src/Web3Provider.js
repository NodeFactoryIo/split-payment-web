import React from 'react';
import { ethers } from 'ethers';

export const Web3Context = React.createContext({});

export const Web3Provider = ({ children }) => {
  const provider = new ethers.providers.Web3Provider(window.web3.currentProvider);
  return (
    <Web3Context.Provider value={{ provider }}>
      {children}
    </Web3Context.Provider>
  )
};
