import React from 'react'
import { Image, Text, View } from 'react-native'
import CocktailList from '../SharedCocktailComponents/CocktailList'
import { COLORS } from '../../../style/theme.style'
import { commonStyles as common } from '../../../style/common.style'

class MyCreationsScreen extends React.Component {
  static navigationOptions = { title: 'Your Creations' }

  state = {
    loaded: false
  }

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
      <Image
        style={{ height: 100, width: 100 }}
        source={{ uri: 'https://i.ibb.co/YQjrys0/shaker.png' }}
      />
      <Text style={{ ...common.heading, textAlign: 'center', fontSize: 40 }}>
        No Creations.
      </Text>
      <Text
        style={{
          ...common.regularText,
          fontSize: 18,
          textAlign: 'center',
          color: COLORS.GREY
        }}
      >
        Use the cocktail creator to share your best inventions with the world
      </Text>
    </View>
  )

  navigateToCocktail = id =>
    this.props.navigation.navigate('CocktailDisplay', {
      cocktail: this.state.myCreations.find(cocktail => cocktail.id === id)
    })

  render() {
    const myCreations = this.props.navigation.getParam('myCreations', [])

    return myCreations.length === 0 ? (
      this.emptyState()
    ) : (
      <CocktailList
        handleCocktailSelect={this.navigateToCocktail}
        cocktails={myCreations}
      />
    )
  }
}

export default MyCreationsScreen
