export const REQUEST_ETH_TRANSACTIONS = 'REQUEST_ETH_TRANSACTIONS';

const requestETHTransactions = (address) => ({
  type: REQUEST_ETH_TRANSACTIONS,
  payload: {address},
});

export const actions = {
  requestETHTransactions,
};