import { call, takeLatest, put } from 'redux-saga/effects';
import { ETH_TRANSACTIONS_URL } from '../../etherscan-api';
import Box from "3box";
import { REQUEST_ETH_TRANSACTIONS, REQUEST_ETH_TRANSACTIONS_ERROR, REQUEST_ETH_TRANSACTIONS_SUCCESS } from './actions';

function* getETHTransactions() {
  yield takeLatest(REQUEST_ETH_TRANSACTIONS, function* (action) {
    const { payload } = action;
    const url = ETH_TRANSACTIONS_URL.replace(':address', payload.address);
    try {
      const response = yield call(fetch, url);
      const payload = yield response.json();

      if (payload.status !== "0") {
        let transactions = payload.result.filter(tx => tx.gas === "21000");
        transactions = yield Promise.all(transactions.slice(-5).map(async tx => {
          const profile = await Box.getProfile(tx.to);
          return {
            ...tx,
            identity: profile
          }
        }));
        yield put({ type: REQUEST_ETH_TRANSACTIONS_SUCCESS, payload: transactions });
      } else {
        throw new Error(payload.result);
      }
    } catch (e) {
      console.error(e.message);
      yield put({ type: REQUEST_ETH_TRANSACTIONS_ERROR, message: e.message });
    }

  });
}

export default [
  getETHTransactions,
]