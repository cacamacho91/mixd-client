import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { SearchBar } from 'react-native-elements'
import CocktailList from '../../CocktailList'
import CocktailDetail from './CocktailDetail'
import API from '../../adapters/API'

class CocktailScreen extends React.Component {
  state = {
    allCocktails: [],
    searchTerm: '',
    loaded: false,
    selectedCocktailId: null
  }

  componentDidMount = () =>
    API.getAllCocktails().then(allCocktails =>
      this.setState({ allCocktails, loaded: true })
    )

  getSelectedCocktail = () =>
    this.state.allCocktails.find(
      cocktail => cocktail.id === this.state.selectedCocktailId
    )

  deSelectCocktail = () => this.setState({ selectedCocktailId: null })

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
          <CocktailList
            handleCocktailSelect={cocktail =>
              this.setState({ selectedCocktailId: cocktail.id })
            }
            cocktails={allCocktails}
          />
        ) : (
          <Text>Loading...</Text>
        )}
        <CocktailDetail
          handleModalClose={this.deSelectCocktail}
          selectedCocktail={this.getSelectedCocktail()}
        />
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
