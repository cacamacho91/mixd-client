import React from 'react'
import { View, Text } from 'react-native'
import { Input, Icon, Button } from 'react-native-elements'
import { commonStyles as common } from '../../../style/common.style'
import { COLORS } from '../../../style/theme.style'

class LoginSignUp extends React.Component {
  state = {
    username: '',
    password: ''
  }

  render() {
    const { username, password } = this.state
    const { navigate, loginView, handleSubmit } = this.props

    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: COLORS.BLACK
        }}
      >
        <View style={{ width: ' 80%', marginTop: 60 }}>
          <View style={{ marginBottom: 15 }}>
            <Text
              style={{
                ...common.heading,
                fontSize: 45,
                textAlign: 'center'
              }}
            >
              MIXD
            </Text>
            <Text
              style={{
                ...common.regularText,
                textAlign: 'center',
                fontSize: 18,
                marginBottom: 10
              }}
            >
              Drink outside the box
            </Text>
          </View>
          <Input
            name='username'
            containerStyle={{ marginBottom: 15 }}
            inputStyle={{ ...common.regularText, textAlign: 'center' }}
            onChangeText={username => this.setState({ username })}
            value={username}
            placeholder='username'
            leftIcon={
              <Icon
                type='font-awesome'
                name='user-circle-o'
                size={15}
                color={COLORS.WHITE}
              />
            }
          />
          <Input
            containerStyle={{ marginBottom: 10 }}
            inputStyle={{ ...common.regularText, textAlign: 'center' }}
            secureTextEntry={true}
            labelStyle={{ ...common.regularText }}
            name={password}
            onChangeText={password => this.setState({ password })}
            value={password}
            placeholder='password'
            leftIcon={
              <Icon
                type='simplelineicons'
                name='lock'
                size={15}
                color={COLORS.WHITE}
              />
            }
          />
          <Button
            buttonStyle={{
              borderColor: '#493657',
              backgroundColor: '#493657',
              borderWidth: 2,
              borderRadius: 10,
              margin: 15
            }}
            titleStyle={{ ...common.regularText, fontSize: 16 }}
            onPress={() => handleSubmit({ username, password })}
            title={loginView ? 'Login' : 'Signup'}
          />

          <Text
            style={{
              ...common.regularText,
              textAlign: 'center',
              fontSize: 12
            }}
            onPress={navigate}
          >
            {loginView ? 'Signup' : 'Login'}
          </Text>
        </View>
      </View>
    )
  }
}

export default LoginSignUp
