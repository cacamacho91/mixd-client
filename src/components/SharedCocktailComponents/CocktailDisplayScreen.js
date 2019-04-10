import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Tooltip, Icon } from 'react-native-elements'
import { commonStyles as common } from '../../../style/common.style'
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
            height={200}
            ingredients={cocktail.cocktail_ingredients}
          />
        </View>

        <View style={common.cocktailInfoContainer}>
          <Text style={common.heading}>{cocktail.name}</Text>
          <Tooltip
            style={common.regularText}
            popover={<Text>{cocktail.info}</Text>}
          >
            <Icon name='info-outline' type='material-icons' />
          </Tooltip>

          <Text style={common.regularText}>{cocktail.instructions}</Text>
          <View style={common.tasteRow}>
            {cocktail.tastes.map((taste, idx) => (
              <Taste {...taste} key={idx} />
            ))}
          </View>
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
