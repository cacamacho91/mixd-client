import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import { Input, Icon, Button } from 'react-native-elements'
import { commonStyles as common } from '../../../style/common.style'

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

  render() {
    const { username, password } = this.state
    const { navigate, loginView, handleSubmit } = this.props

    return (
      <ImageBackground
        source={{ uri: 'https://i.ibb.co/nLT0VV4/final.jpg' }}
        style={{ width: '100%', height: '100%', alignItems: 'center' }}
      >
        <View style={{ width: ' 80%', marginTop: 60 }}>
          <Text style={{ ...common.heading, textAlign: 'center' }}>MIXD</Text>
          <Text
            style={{
              ...common.regularText,
              textAlign: 'center',
              marginBottom: 10
            }}
          >
            Drink outside the box
          </Text>
          <Input
            name='username'
            containerStyle={{ marginBottom: 15 }}
            inputStyle={common.regularText}
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
            containerStyle={{ marginBottom: 10 }}
            inputStyle={common.regularText}
            secureTextEntry={true}
            name={password}
            onChangeText={password => this.setState({ password })}
            value={password}
            placeholder='password...'
            leftIcon={
              <Icon
                type='simplelineicons'
                name='lock'
                size={24}
                color='black'
              />
            }
          />
          <Button
            buttonStyle={{
              borderColor: '#493657',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              borderWidth: 2,
              borderRadius: 10
            }}
            titleStyle={common.regularText}
            onPress={() => handleSubmit({ username, password })}
            title={loginView ? 'Login' : 'Signup'}
          />

          <Text style={common.lightText} onPress={navigate}>
            or{loginView ? 'Signup' : 'Login'}{' '}
          </Text>
        </View>
      </ImageBackground>
    )
  }
}

export default Login
