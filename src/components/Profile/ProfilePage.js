import React from 'react'
import { Button, Text, View } from 'react-native'
import { withNavigation } from 'react-navigation'

class ProfilePage extends React.Component {
  static navigationOptions = { title: 'Your Profile' }
  render() {
    const { logout } = this.props

    state = {}

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
        <Button title='Logout' onPress={logout} />
      </View>
    )
  }
}

export default withNavigation(ProfilePage)
