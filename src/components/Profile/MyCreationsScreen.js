import React from 'react'
import { Button, Text, View } from 'react-native'

class MyCreationsScreen extends React.Component {
  static navigationOptions = { title: 'Your Creations' }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Im Your Creations Screen!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title='Dismiss'
        />
      </View>
    )
  }
}

export default MyCreationsScreen
