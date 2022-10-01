import React from 'react'
// Import useSelector to get values from store
import { useSelector } from 'react-redux'

const Profile = () => {
  // Create user w/ useSelector
  const user = useSelector(state => state.user.value)
  // Create themeColor w/ useSelector
  const colorTheme = useSelector(state => state.theme.value)

  return (
    // Set div style to colorTheme
    <div
      style={{color: colorTheme}}
    >
      <h1>Profile Page</h1>
      <p>Name: { user.name }</p>
      <p>Age: {user.age }</p>
      <p>Email: { user.email }</p>
    </div>
  )
}

export default Profile
