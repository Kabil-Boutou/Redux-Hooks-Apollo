import { INCREMENT, DECREMENT, GO_FETCH } from './consts'
const initialization = { incval: 0, doggs: null, loadin: false }
export const reducer = (state = initialization, action) => {
  switch (action.type) {
    case `RES_${INCREMENT}`:
      return { ...state, incval: action.payload }
    case `RES_${DECREMENT}`:
      return { ...state, incval: action.payload }
    case `REQ_${GO_FETCH}`:
      return { ...state, loadin: true }
    case `RES_${GO_FETCH}`:
      return { ...state, loadin: false, doggs: action.payload }
    case `FAIL_${GO_FETCH}`:
      return { ...state, error: action.payload }
    default:
      return state
  }
}
