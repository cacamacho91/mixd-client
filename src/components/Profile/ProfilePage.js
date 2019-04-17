import React from 'react'
import { Button, Text, View, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import { COLORS } from '../../../style/theme.style'
import { commonStyles as common } from '../../../style/common.style'

class ProfilePage extends React.Component {
  static navigationOptions = { title: 'Your Profile' }
  render() {
    const { logout } = this.props

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
        <View style={{ marginBottom: 50 }}>
          <Text style={{ ...common.lightText }}>Welcome back</Text>
          <Text style={{ ...common.regularText, fontSize: 28 }}>
            {this.props.username}
          </Text>
        </View>

        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('MyCreations', {
              myCreations: this.props.myCreations
            })
          }
        >
          <View>
            <Text style={{ ...common.regularText, fontSize: 23 }}>
              My Creations
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('MyFavourites', {
              myStarred: this.props.myStarredCocktails
            })
          }
        >
          <View>
            <Text style={{ ...common.regularText, fontSize: 23 }}>
              My Starred Cocktails
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{ marginBottom: 30 }} />
        <TouchableOpacity onPress={logout}>
          <Text
            style={{
              ...common.regularText,
              color: COLORS.ACCENT2,
              fontSize: 20
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default withNavigation(ProfilePage)
