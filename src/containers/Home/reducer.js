import { REQUEST_ETH_TRANSACTIONS_SUCCESS } from './actions';

const initalState = {
  transactions: [],
};

export default function homeReducer(state = initalState, action) {
  switch (action.type) {
    case REQUEST_ETH_TRANSACTIONS_SUCCESS: {
      // Removes random contract interactions, tokens also.
      return {
        ...state,
        transactions: action.payload,
      }
    }
    default:
      return state;
  }
}
