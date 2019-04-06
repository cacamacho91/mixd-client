import React from 'react'
import { Button, Text, View } from 'react-native'

class ProfilePage extends React.Component {
  static navigationOptions = { title: 'Your Profile' }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Welcome!</Text>
        <Button
          title='My Creations'
          onPress={() => this.props.navigation.navigate('MyCreations')}
        />
        <Button
          title='My Favourites'
          onPress={() => this.props.navigation.navigate('MyFavourites')}
        />
      </View>
    )
  }
}

export default ProfilePage
