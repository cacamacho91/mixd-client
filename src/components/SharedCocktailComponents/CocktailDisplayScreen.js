import React, { Fragment } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { Tooltip, Icon } from 'react-native-elements'
import { commonStyles as common } from '../../../style/common.style'
import Favorite from './Favorite'
import Taste from './Taste'
import GarnishList from './GarnishList'
import CocktailGraphic from './CocktailGraphic'
import CardFlip from 'react-native-card-flip'

const ItemMini = props => {
  return (
    <View>
      <Text>I am a mini boi</Text>
    </View>
  )
}

const ItemFull = props => {
  return (
    <View>
      <Text>I am a full boi</Text>
    </View>
  )
}

class CocktailDisplayScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: <Favorite outlineColor='white' />
  })

  generateCocktailContent = cocktail => (
    <View style={common.cocktailContainer}>
      <Text style={common.heading}>{cocktail.name}</Text>

      <CardFlip style={styles.cardContainer} ref={card => (this.card = card)}>
        <TouchableOpacity style={styles.card} onPress={() => this.card.flip()}>
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
            <View style={common.tasteRow}>
              {cocktail.tastes.map((taste, idx) => (
                <Taste {...taste} key={idx} />
              ))}
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ ...styles.card, ...styles.card2 }}
          onPress={() => this.card.flip()}
        >
          <View style={common.cocktailInfoContainer}>
            <Icon name='info-outline' type='material-icons' />
            <Text style={common.regularText}>{cocktail.info}</Text>

            <Text style={common.regularText}>{cocktail.instructions}</Text>
          </View>
        </TouchableOpacity>
      </CardFlip>
    </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  cardContainer: {
    marginTop: 30,
    width: 320,
    height: 470
  },
  card: {
    width: 320,
    height: 470,
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: 'gray',
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5
  },
  card2: {
    backgroundColor: '#FEB12C'
  }
})

export default CocktailDisplayScreen
