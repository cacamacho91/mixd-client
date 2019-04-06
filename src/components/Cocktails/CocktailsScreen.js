import React from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements'
import { SearchBar } from 'react-native-elements'
import API from '../../adapters/API'
import CocktailList from '../SharedCocktailComponents/CocktailList'
import { normalizeString } from '../../lib/helper'

class CocktailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Cocktails',
    headerRight: (
      <Icon
        reverse
        onPress={() => navigation.navigate('Filter')}
        name='filter'
        type='foundation'
        size={20}
        color='gray'
      />
    )
  })

  state = {
    allCocktails: [],
    searchTerm: '',
    loaded: false
  }

  componentDidMount = () =>
    API.getAllCocktails().then(allCocktails =>
      this.setState({ allCocktails, loaded: true })
    )

  navigateToCocktail = id =>
    this.props.navigation.navigate('CocktailDisplay', {
      cocktail: this.state.allCocktails.find(cocktail => cocktail.id === id)
    })

  filteredAndSearchedCocktails = () =>
    this.state.allCocktails.filter(cocktail =>
      normalizeString(cocktail.name).includes(
        normalizeString(this.state.searchTerm)
      )
    )

  render() {
    const { searchTerm, loaded, allCocktails } = this.state

    return (
      <View>
        <SearchBar
          lightTheme
          platform='android'
          placeholder='Search...'
          onChangeText={searchTerm => this.setState({ searchTerm })}
          value={searchTerm}
        />
        {loaded ? (
          <CocktailList
            handleCocktailSelect={this.navigateToCocktail}
            cocktails={this.filteredAndSearchedCocktails()}
          />
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    )
  }
}

export default CocktailsScreen
