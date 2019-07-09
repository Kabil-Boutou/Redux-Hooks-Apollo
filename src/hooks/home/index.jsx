import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DatePicker, Button } from 'antd'
import { useApolloClient } from 'react-apollo-hooks'
import { Link } from 'react-router-dom'
import { INCREMENT, DECREMENT, GO_FETCH } from './consts'
import { actionGenerator } from '../../utils'
import { wrapper } from './style'
const dateFormat = 'DD-MM-YYYY'

const Home = () => {
  const dispatch = useDispatch()
  const client = useApolloClient()
  const state = useSelector(state => state.home)
  return (
    <div className={wrapper}>
      <h6>Ant date : {state.incval}</h6>
      {state.doggs && console.log('doggs', state.doggs)}
      <DatePicker format={dateFormat} />
      <Button
        onClick={() =>
          dispatch({
            type: actionGenerator(GO_FETCH, 'req'),
            client
          })
        }
      >
        Fetching Doggs
      </Button>
      <Button onClick={() => dispatch({ type: actionGenerator(INCREMENT, 'req') })}>+</Button>
      <Button onClick={() => dispatch({ type: actionGenerator(DECREMENT, 'req') })}>-</Button>
      <Link to="/about">About</Link>
    </div>
  )
}

export default Home
