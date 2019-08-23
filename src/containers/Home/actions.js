export const REQUEST_ETH_TRANSACTIONS = 'REQUEST_ETH_TRANSACTIONS';
export const REQUEST_ETH_TRANSACTIONS_SUCCESS = 'REQUEST_ETH_TRANSACTIONS_SUCCESS';
export const REQUEST_ETH_TRANSACTIONS_ERROR = 'REQUEST_ETH_TRANSACTIONS_ERROR';

const requestETHTransactions = (address) => ({
  type: REQUEST_ETH_TRANSACTIONS,
  payload: {address},
});

export const actions = {
  requestETHTransactions,
};