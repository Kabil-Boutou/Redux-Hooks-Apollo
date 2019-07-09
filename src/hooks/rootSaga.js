import { all, fork } from 'redux-saga/effects'
import * as homeSaga from './home/saga'
import * as aboutSaga from './about/saga'
export default function* rootSaga() {
  yield all([...Object.values(homeSaga), ...Object.values(aboutSaga)].map(fork))
}
