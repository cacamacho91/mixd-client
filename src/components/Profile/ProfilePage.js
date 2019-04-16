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
          onPress={() =>
            this.props.navigation.navigate('MyCreations', {
              myCreations: this.props.myCreations
            })
          }
        />
        <Button
          title='My Starred Cocktails'
          onPress={() =>
            this.props.navigation.navigate('MyFavourites', {
              myStarred: this.props.myStarredCocktails
            })
          }
        />
        <Button title='Logout' onPress={logout} />
      </View>
    )
  }
}

export default withNavigation(ProfilePage)
