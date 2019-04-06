import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import CocktailListItem from './CocktailListItem'

class CocktailList extends React.PureComponent {
  cocktails = new Array(45).fill('cocktail')

  keyExtractor = (cocktail, idx) => cocktail.id.toString()

  render() {
    return (
      <FlatList
        style={styles.cocktailListContainer}
        data={this.props.cocktails}
        keyExtractor={this.keyExtractor}
        renderItem={({ item }) => <CocktailListItem cocktail={item} />}
      />
    )
  }
}

const styles = StyleSheet.create({
  cocktailListContainer: {
    marginBottom: 50
  }
})

export default CocktailList
