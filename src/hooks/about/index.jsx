import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useApolloClient } from 'react-apollo-hooks'
import { createSelector } from 'reselect'
import { Link } from 'react-router-dom'
import gql from 'graphql-tag'
import { background } from './style'
import { GET_USERS } from './consts'
import { actionGenerator } from '../../utils'

function compare(a, b) {
  if (a.address.city < b.address.city) {
    return -1
  }
  if (a.address.city > b.address.city) {
    return 1
  }
  return 0
}
const usersOrderByAdresses = createSelector(
  users => users,
  usersOrder => usersOrder.length > 0 && usersOrder.sort(compare)
)
const About = () => {
  const dispatch = useDispatch()
  const client = useApolloClient()
  const { incVal, users } = useSelector(state => ({ incval: state.home.incval, users: state.about.users }))
  const orderUsers = useSelector(usersOrderByAdresses)
  console.log('usersOrderByAdresses:', orderUsers)
  useEffect(() => {
    try {
      const result = client.readQuery({
        query: gql`
          query {
            dogs {
              id
            }
          }
        `
      })
      console.log('result:', result)
    } catch (e) {
      console.log('error', e)
    }
    dispatch({ type: actionGenerator(GET_USERS, 'req') })
  }, [dispatch, client])
  return (
    <>
      <h6 className={background}>This is About page {incVal}</h6>
      {users &&
        users.map((user, key) => (
          <ul key={key}>
            <li>
              {user.name}
              <ul>
                <li>{user.address.city}</li>
              </ul>
            </li>
          </ul>
        ))}
      <Link to="/">Home</Link>
    </>
  )
}

export default About
