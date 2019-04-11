import React from 'react'
import { Button, Text, View } from 'react-native'
import API from '../../adapters/API'
import CocktailList from '../SharedCocktailComponents/CocktailList'
import Loading from '../../Loading'

class MyCreationsScreen extends React.Component {
  static navigationOptions = { title: 'Your Creations' }

  state = {
    myCreations: [],
    loaded: false
  }

  componentDidMount = () =>
    API.getMyCreations().then(myCreations =>
      this.setState({ myCreations, loaded: true })
    )

  navigateToCocktail = id =>
    this.props.navigation.navigate('CocktailDisplay', {
      cocktail: this.state.myCreations.find(cocktail => cocktail.id === id)
    })

  render() {
    const { myCreations, loaded } = this.state

    return loaded ? (
      <CocktailList
        handleCocktailSelect={this.navigateToCocktail}
        cocktails={myCreations}
      />
    ) : (
      <Loading />
    )
  }
}

export default MyCreationsScreen
