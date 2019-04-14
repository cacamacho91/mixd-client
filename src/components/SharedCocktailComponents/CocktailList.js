import React from 'react'
import { FlatList } from 'react-native'
import CocktailListItem from './CocktailListItem'

class CocktailList extends React.PureComponent {
  keyExtractor = (cocktail, idx) => cocktail.id.toString()

  render() {
    return (
      <FlatList
        style={{ backgroundColor: '#231F20' }}
        data={this.props.cocktails}
        keyExtractor={this.keyExtractor}
        renderItem={({ item }) => <CocktailListItem cocktail={item} />}
      />
    )
  }
}

export default CocktailList
