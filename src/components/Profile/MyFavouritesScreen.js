import React from 'react'
import { Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { COLORS } from '../../../style/theme.style'
import { commonStyles as common } from '../../../style/common.style'

class MyFavouritesScreen extends React.Component {
  static navigationOptions = { title: 'Your Favourites' }

  emptyState = () => (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.BLACK,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Icon
        type='font-awesome'
        name='star-o'
        color={COLORS.ACCENT2}
        size={50}
      />
      <Text style={{ ...common.heading, textAlign: 'center', fontSize: 40 }}>
        No Starred Cocktails.
      </Text>
      <Text
        style={{
          ...common.regularText,
          fontSize: 18,
          textAlign: 'center',
          color: COLORS.GREY
        }}
      >
        Tap the star icon when viewing cocktails to add them here...
      </Text>
    </View>
  )

  render() {
    const myStarred = this.props.navigation.getParam('myStarred', [])

    return myStarred.length === 0 ? (
      this.emptyState()
    ) : (
      <CocktailList
        handleCocktailSelect={this.navigateToCocktail}
        cocktails={myStarred}
      />
    )
  }
}
export default MyFavouritesScreen
