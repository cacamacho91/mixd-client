import React from 'react'
import { View, Text } from 'react-native'
import { Input, Icon, Button } from 'react-native-elements'
import { commonStyles as common } from '../../../style/common.style'

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

  loginHeader = () => <Text style={common.heading}>Login to MIXD! </Text>
  signupHeader = () => <Text style={common.heading}>Join MIXD!</Text>

  render() {
    const { username, password } = this.state
    const { navigate, loginView, handleSubmit } = this.props

    return (
      <View>
        {loginView ? this.loginHeader() : this.signupHeader()}
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
        <Button
          onPress={() => handleSubmit({ username, password })}
          title={loginView ? 'Login' : 'Signup'}
        />

        <Text>or</Text>

        <Button title={loginView ? 'Signup' : 'Login'} onPress={navigate} />
      </View>
    )
  }
}

export default Login
