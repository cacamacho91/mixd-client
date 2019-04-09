import React from 'react'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { withNavigation } from 'react-navigation'
import { commonStyles as common } from '../../../style/common.style'
import Favorite from './Favorite'
import Taste from './Taste'

class CocktailListItem extends React.Component {
  generateCocktailContent = cocktail => (
    <View style={styles.cocktailContent}>
      <Image
        source={require('./glass-assets/rock.png')}
        style={styles.cocktailImage}
      />
      <View style={styles.cocktailInfo}>
        <Text style={common.heading}>{cocktail.name}</Text>
        <Text style={common.subText}>
          {cocktail.cocktail_ingredients
            .map(ci => ci.ingredient.name)
            .join(', ')}
        </Text>
        <View style={styles.tasteRow}>
          {cocktail.tastes.map((taste, idx) => (
            <Taste {...taste} mini key={idx} />
          ))}
        </View>
      </View>

      <View>
        <Favorite outlineColor='gray' />
      </View>
    </View>
  )
  cocktailPlaceholder = () => <Text>Loading Cocktail...</Text>

  render() {
    const { cocktail } = this.props

    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate('CocktailDisplay', { cocktail })
        }
      >
        {cocktail
          ? this.generateCocktailContent(cocktail)
          : this.cocktailPlaceholder()}
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  cocktailContent: {
    width: '100%',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cocktailImage: {
    marginRight: 8,
    height: 40,
    width: 40
  },
  cocktailInfo: {
    flexDirection: 'column',
    width: '60%'
  },
  listContainer: {
    width: '100%'
  },
  tasteRow: {
    flexDirection: 'row'
  }
})

export default withNavigation(CocktailListItem)
