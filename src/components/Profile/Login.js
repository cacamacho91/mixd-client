import React from 'react'
import { View, Text } from 'react-native'
import { Input, Icon, Button } from 'react-native-elements'
import SignUp from './SignUp'
import { commonStyles as common } from '../../../style/common.style'

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleSubmit = () => {
    const user = {
      username: '@' + this.state.username,
      password: this.state.password
    }
    API.login(user).then(data => {
      if (data.error) {
        alert('somthing went wrong')
      } else {
        login(data)
        history.push('/myaccount')
      }
    })
  }

  render() {
    const { username, password } = this.state

    return (
      <View>
        <Text h3>Log In to MIXD! </Text>
        <Input
          name='username'
          onChangeText={username => this.setState({ username })}
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
          secureTextEntry={true}
          name={password}
          onChangeText={password => this.setState({ password })}
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
