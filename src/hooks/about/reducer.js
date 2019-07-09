import { GET_USERS, initialState } from './consts'
import { actionGenerator } from '../../utils'
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionGenerator(GET_USERS, 'req'):
      return { ...initialState, loading: true }
    case actionGenerator(GET_USERS, 'res'):
      return { ...initialState, users: action.payload }
    case actionGenerator(GET_USERS, 'fail'):
      return { ...initialState, error: action.payload }
    default:
      return initialState
  }
}
