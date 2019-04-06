import React from 'react'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { withNavigation } from 'react-navigation'
import Favorite from './Favorite'
import Taste from './Taste'

class CocktailListItem extends React.Component {
  generateCocktailContent = cocktail => (
    <View style={styles.cocktailContent}>
      <Image
        source={{
          uri: 'https://via.placeholder.com/80'
        }}
        style={styles.cocktailImage}
      />
      <View style={styles.cocktailInfo}>
        <Text h4>{cocktail.name}</Text>
        <Text>
          {cocktail.cocktail_ingredients.map(ci => ci.ingredient.name).join()}
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
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: '#d6d7da'
  },
  cocktailImage: {
    marginRight: 8,
    height: 80,
    width: 80
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
