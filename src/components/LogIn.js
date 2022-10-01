import React from 'react'
// Import useDispatch to allow changes to state
import { useDispatch } from 'react-redux'
// Import login action
import { login } from '../features/user'

const LogIn = () => {
  // Create variable to hold dispatch function
  const dispatch = useDispatch()

  return (
    <div>
        <button
          onClick={() => 
            dispatch(login({name: 'Ray', age: 39, email: 'email@email.com'}))}
        >Login</button>
    </div>
  )
}

export default LogIn
