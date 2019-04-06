import React from 'react'
import Login from './Login'
import Profile from './Profile'

class ProfileScreen extends React.Component {
  static navigationOptions = { title: 'Your Profile' }
  render() {
    const username = null //replace when auth done

    return username ? <Profile /> : <Login />
  }
}

export default ProfileScreen
