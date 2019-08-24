import { REQUEST_ETH_TRANSACTIONS_SUCCESS } from './actions';

const initalState = {
  transactions: [],
};

export default function homeReducer(state = initalState, action) {
  switch (action.type) {
    case REQUEST_ETH_TRANSACTIONS_SUCCESS: {
      // Removes random contract interactions, tokens also.
      let transactions = action.payload.filter(tx => tx.gas === "21000");
      transactions = transactions.slice(0, 10);
      return {
        ...state,
        transactions,
      }
    }
    default:
      return state;
  }
}
