import { takeLatest, put, call } from 'redux-saga/effects'
import { GET_USERS } from './consts'
import { actionGenerator } from '../../utils'
function fetchUsers() {
  return fetch('https://jsonplaceholder.typicode.com/users').then(resp => resp.json())
}

function* getUsers() {
  try {
    const users = yield call(fetchUsers)
    yield put({ type: actionGenerator(GET_USERS, 'res'), payload: users })
  } catch {
    yield put({ type: actionGenerator(GET_USERS, 'fail'), payload: 'err request' })
  }
}
export function* watchGetUsers() {
  yield takeLatest(actionGenerator(GET_USERS, 'req'), getUsers)
}
