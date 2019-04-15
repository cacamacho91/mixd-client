import React from 'react'
import { View, Button, Text } from 'react-native'

class CreatorHelpScreen extends React.Component {
  static navigationOptions = { title: 'Guide' }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 30 }}>How To Create Cocktails</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title='Dismiss'
        />
      </View>
    )
  }
}

export default CreatorHelpScreen
