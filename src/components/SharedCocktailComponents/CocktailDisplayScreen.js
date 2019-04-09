import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import { commonStyles as common } from '../../../style/common.style'
// Do not use .index within /SharedCocktailComponents to aviod require cycles
import Favorite from './Favorite'
import Taste from './Taste'
import GarnishList from './GarnishList'
import CocktailGraphic from './CocktailGraphic'

class CocktailDisplayScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: <Favorite outlineColor='white' />
  })

  generateCocktailContent = cocktail => (
    <ScrollView>
      <View style={common.cocktailContainer}>
        <View style={common.cocktailGrapahicContainer}>
          {cocktail.garnishes.length === 0 ? (
            <Text style={common.regularText}> No Garnish Suggested</Text>
          ) : (
            <GarnishList garnishes={cocktail.garnishes} />
          )}

          <CocktailGraphic
            height={300}
            ingredients={cocktail.cocktail_ingredients}
            glass='rock'
          />
        </View>

        <View style={common.cocktailInfoContainer}>
          <Text style={common.heading}>{cocktail.name}</Text>
          <Text style={common.regularText}>{cocktail.instructions}</Text>
          <View style={common.tasteRow}>
            {cocktail.tastes.map((taste, idx) => (
              <Taste {...taste} key={idx} />
            ))}
          </View>
          <Text style={common.regularText}>{cocktail.info}</Text>
        </View>
      </View>
    </ScrollView>
  )

  generatePlaceholder = () => <Text> Loading... </Text>

  render() {
    const { navigation } = this.props
    const cocktail = navigation.getParam('cocktail', {})

    return cocktail
      ? this.generateCocktailContent(cocktail)
      : this.generatePlaceholder()
  }
}

export default CocktailDisplayScreen
