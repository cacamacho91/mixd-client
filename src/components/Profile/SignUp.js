import React from 'react'
import { View, Text } from 'react-native'
import { Input, Icon } from 'react-native-elements'

class SignUp extends React.Component {
  render() {
    return (
      <View>
        <Text> Sign Up to MIXD! </Text>
        <Input
          placeholder='INPUT WITH CUSTOM ICON'
          leftIcon={<Icon name='user' size={24} color='black' />}
        />
      </View>
    )
  }
}
export default SignUp
