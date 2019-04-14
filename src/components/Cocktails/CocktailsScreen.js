import React from 'react'
import { View, Text } from 'react-native'
import { Icon, SearchBar } from 'react-native-elements'
import CocktailList from '../SharedCocktailComponents/CocktailList'
import { normalizeString } from '../../lib/helper'

class CocktailsScreen extends React.Component {
  state = {
    searchTerm: '',
    visible: true
  }

  componentDidMount() {
    this.props.navigation.setParams({
      handleVisibiliy: this.toggleSearchVisibility
    })
  }

  toggleSearchVisibility = () => this.setState({ visible: !this.state.visible })

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state
    return {
      title: 'Cocktails',
      headerRight: (
        <View style={{ marginRight: 10 }}>
          <Icon
            onPress={() => params.handleVisibiliy()}
            name='search'
            type='ant-design'
            size={20}
            color='#FFFFFA'
          />
        </View>
      )
    }
  }

  navigateToCocktail = id =>
    this.props.navigation.navigate('CocktailDisplay', {
      cocktail: this.state.allCocktails.find(cocktail => cocktail.id === id)
    })

  filteredAndSearchedCocktails = () =>
    this.props.screenProps.allCocktails.filter(cocktail =>
      normalizeString(cocktail.name).includes(
        normalizeString(this.state.searchTerm)
      )
    )

  render() {
    const { searchTerm, visible } = this.state

    return (
      <View>
        {/* <SearchBar
          visible={visible}
          placeholder='Search...'
          onChangeText={searchTerm => this.setState({ searchTerm })}
          value={searchTerm}
        /> */}
        <CocktailList
          handleCocktailSelect={this.navigateToCocktail}
          cocktails={this.filteredAndSearchedCocktails()}
        />
      </View>
    )
  }
}

export default CocktailsScreen
