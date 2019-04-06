import React from 'react'
import { View } from 'react-native'
import { Input, Icon, Button, Text } from 'react-native-elements'
import SignUp from './SignUp'

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

  render() {
    const { username, password } = this.state

    return (
      <View>
        <Text h3>Log In to MIXD! </Text>
        <Input
          name='username'
          onChange={() => {}}
          value={username}
          placeholder='username...'
          leftIcon={
            <Icon
              type='font-awesome'
              name='user-circle-o'
              size={24}
              color='black'
            />
          }
        />
        <Input
          name={password}
          onChange={() => {}}
          value={password}
          placeholder='password...'
          leftIcon={
            <Icon type='simplelineicons' name='lock' size={24} color='black' />
          }
        />
        <Button title='Login' />
        <Text>or</Text>
        <Button title='Sign Up' />
      </View>
    )
  }
}

export default Login
