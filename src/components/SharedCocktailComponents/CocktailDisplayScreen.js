import React, { Fragment } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Text, Icon } from 'react-native-elements'
import Favorite from './Favorite'
import Taste from './Taste'

class CocktailDisplayScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <Favorite
        outlineColor='white'
        active={Math.random() > 0.5 ? true : false}
      />
    )
  })

  generateCocktailContent = cocktail => (
    <View style={styles.cocktailContainer}>
      <View style={styles.cocktailHeader}>
        <Image
          source={{
            uri: 'https://via.placeholder.com/400'
          }}
          style={styles.cocktailImage}
        />
        <Text h3>{cocktail.name}</Text>
        <Text>{cocktail.instructions}</Text>
        <View style={styles.tasteRow}>
          {cocktail.tastes.map((taste, idx) => (
            <Taste {...taste} key={idx} />
          ))}
        </View>
      </View>
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
  cocktailContainer: {
    flexDirection: 'column'
  },
  cocktailHeader: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  cocktailImage: {
    width: '100%',
    height: 400
  },
  tasteRow: {
    flexDirection: 'row'
  }
})

export default CocktailDisplayScreen
