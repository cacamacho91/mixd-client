import React from 'react'
import { FlatList } from 'react-native'
import CocktailListItem from './CocktailListItem'

class CocktailList extends React.PureComponent {
  cocktails = new Array(45).fill('cocktail')

  keyExtractor = (cocktail, idx) => cocktail.id.toString()

  render() {
    return (
      <FlatList
        data={this.props.cocktails}
        keyExtractor={this.keyExtractor}
        renderItem={({ item }) => <CocktailListItem cocktail={item} />}
      />
    )
  }
}
export default CocktailList
