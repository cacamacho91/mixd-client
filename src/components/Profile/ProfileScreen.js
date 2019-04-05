import React from 'react'
import { Button, Text, View } from 'react-native'

class ProfileScreen extends React.Component {
  static navigationOptions = { title: 'Your Profile' }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Im a Profile Pager</Text>
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

export default ProfileScreen
