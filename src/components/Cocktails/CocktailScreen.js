import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { SearchBar } from 'react-native-elements'
import CocktailList from './CocktailList'
import API from '../../adapters/API'

class CocktailScreen extends React.Component {
  state = {
    allCocktails: [],
    searchTerm: '',
    laoded: false
  }

  componentDidMount = () =>
    API.getAllCocktails().then(allCocktails =>
      this.setState({ allCocktails, loaded: true })
    )

  render() {
    const { searchTerm, loaded, allCocktails } = this.state

    return (
      <View>
        <SearchBar
          lightTheme
          platform='android'
          containerStyle={styles.searchBar}
          placeholder='Search...'
          onChangeText={searchTerm => this.setState({ searchTerm })}
          value={searchTerm}
        />
        {loaded ? (
          <CocktailList cocktails={allCocktails} />
        ) : (
          <Text>Loading</Text>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  searchBar: {
    marginTop: 18
  }
})

export default CocktailScreen
