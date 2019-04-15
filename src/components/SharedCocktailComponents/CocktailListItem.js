import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Text, Icon } from 'react-native-elements'
import { withNavigation } from 'react-navigation'
import CocktailGraphic from './CocktailGraphic'
import Star from './Star'
import { commonStyles as common } from '../../../style/common.style'
import { COLORS } from '../../../style/theme.style.js'

class CocktailListItem extends React.Component {
  generateCocktailContent = cocktail => (
    <View style={styles.cocktailListItemCard}>
      <View style={styles.cocktailImage}>
        <CocktailGraphic
          height={40}
          width={40}
          ingredients={cocktail.cocktail_ingredients}
          simple
        />
      </View>

      <View style={styles.cocktailInfo}>
        <Text style={{ ...common.heading, fontSize: 20 }}>{cocktail.name}</Text>
        <Text
          style={{ ...common.regularText, color: COLORS.GREY, fontSize: 12 }}
        >
          {cocktail.cocktail_ingredients
            .map(ci => ci.ingredient.name)
            .join(', ')}
        </Text>
      </View>

      <View style={styles.cocktailStars}>
        <Star mini count={10} active />
      </View>
    </View>
  )
  cocktailPlaceholder = () => (
    <Text style={common.regularText}> ...Loading Cocktail... </Text>
  )

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
  cocktailListItemCard: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  cocktailInfo: {
    width: '65%'
  },
  cocktailStars: {
    width: '15%',
    alignItems: 'center'
  },
  cocktailImage: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%'
  }
})

export default withNavigation(CocktailListItem)
