import React from 'react'
import { Button, Text, View } from 'react-native'

class MyFavouritesScreen extends React.Component {
  static navigationOptions = { title: 'Your Favourites' }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Im Your Favourites Screen!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title='Dismiss'
        />
      </View>
    )
  }
}
export default MyFavouritesScreen
