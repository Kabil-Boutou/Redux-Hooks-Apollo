import { takeLatest, select, put, call } from 'redux-saga/effects'
import { INCREMENT, DECREMENT, GO_FETCH } from './consts'
import { actionGenerator } from '../../utils'
import gql from 'graphql-tag'
function* increment() {
  try {
    const state = yield select()
    let { incval } = state.home
    incval += 1
    yield put({ type: actionGenerator(INCREMENT, 'res'), payload: incval })
  } catch {
    yield put({ type: actionGenerator(INCREMENT, 'fail') })
  }
}
export function* watchIncrement() {
  yield takeLatest(actionGenerator(INCREMENT, 'req'), increment)
}

function* decrement() {
  try {
    const state = yield select()
    let { incval } = state.home
    incval -= 1
    yield put({ type: actionGenerator(DECREMENT, 'res'), payload: incval })
  } catch {
    yield put({ type: actionGenerator(DECREMENT, 'fail') })
  }
}
export function* watchDecrement() {
  yield takeLatest(actionGenerator(DECREMENT, 'req'), decrement)
}
function fetchDoggs(client) {
  return client.query({
    query: gql`
      query {
        dogs {
          id
        }
      }
    `
  })
}
function* fetchingDoggs({ client }) {
  try {
    const { data } = yield call(fetchDoggs, client)
    yield put({ type: actionGenerator(GO_FETCH, 'res'), payload: data.dogs })
  } catch {
    yield put({ type: actionGenerator(GO_FETCH, 'fail') })
  }
}
export function* watchFetchingDoggs() {
  yield takeLatest(actionGenerator(GO_FETCH, 'req'), fetchingDoggs)
}
