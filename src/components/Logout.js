import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../features/user'

const Logout = () => {
    const dispatch = useDispatch()
  return (
    <div>
        <button
            onClick={() => dispatch(logout())}
        >
            Logut
        </button>
    </div>
  )
}

export default Logout
