import { call, takeLatest } from 'redux-saga';
import { ETH_TRANSACTIONS_URL } from '../../etherscan-api';
import { REQUEST_ETH_TRANSACTIONS } from './actions';

function* getETHTransactions() {
  yield takeLatest(REQUEST_ETH_TRANSACTIONS, function* (action) {
    const { payload: address } = action;
    const url = ETH_TRANSACTIONS_URL.replace(':address', address);
    try {
      const response = yield call(fetch, url);
      const responseBody = response.json();
      console.log(responseBody);
    } catch (e) {
      console.error(e.message);
    }

  });
}

export default [
  getETHTransactions,
]