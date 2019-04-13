import React from 'react'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Text, Icon } from 'react-native-elements'
import { withNavigation } from 'react-navigation'
import { commonStyles as common } from '../../../style/common.style'
import CocktailGraphic from './CocktailGraphic'

class CocktailListItem extends React.Component {
  generateCocktailContent = cocktail => (
    <View style={styles.cocktailListItemCard}>
      <View style={styles.cocktailImage}>
        <CocktailGraphic
          height={60}
          ingredients={cocktail.cocktail_ingredients}
          simple
        />
      </View>

      <View style={styles.cocktailInfo}>
        <Text style={common.heading}>{cocktail.name}</Text>
        <Text style={common.regularText}>
          {cocktail.cocktail_ingredients
            .map(ci => ci.ingredient.name)
            .join(', ')}
        </Text>
      </View>

      <View style={styles.cocktailStars}>
        <Icon type='font-awesome' name='star' color='#F7DBA7' size={15} />
        <Text style={{ ...common.number, color: '#F7DBA7', fontSize: 10 }}>
          10
        </Text>
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
  cocktailListItemCard: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cocktailInfo: {
    width: '60%'
  },
  cocktailStars: {
    width: '15%',
    alignItems: 'center'
  },
  cocktailImage: {
    width: '25%'
  }
})

export default withNavigation(CocktailListItem)
