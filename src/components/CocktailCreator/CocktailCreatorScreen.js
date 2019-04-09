import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  ScrollView,
  ActivityIndicator
} from 'react-native'
import { Icon, Overlay } from 'react-native-elements'
import { commonStyles as common } from '../../../style/common.style'
import GarnishList from '../SharedCocktailComponents/GarnishList'
import CocktailGraphic from '../SharedCocktailComponents/CocktailGraphic'
import API from '../../adapters/API'
import ItemSelector from './ItemSelector'
import { TabView, SceneMap } from 'react-native-tab-view'
import SectionedMultiSelect from 'react-native-sectioned-multi-select'

// const InfoRoute = (
//   <View style={[styles.scene, { backgroundColor: '#ff4081' }]}>
//     <Text> I AM THE FIRST ROUTE BABY</Text>
//   </View>
// )

// const ContentRoute = (
//   <View style={[styles.scene, { backgroundColor: '#ff4081' }]}>
//     <Text> I AM THE next ROUTE BABY</Text>
//   </View>
// )

class CocktailCreatorScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Create A Cocktail',
    headerRight: (
      <Icon
        name='help-outline'
        color='white'
        type='material-icons'
        iconStyle={{ marginRight: 30 }}
        onPress={() => navigation.navigate('Help')}
      />
    )
  })

  state = {
    lib: {
      garnishLib: [],
      ingredientLib: [],
      tasteLib: [],
      garnishesLoaded: false,
      ingredientsLoaded: false,
      tastesLoaded: false
    },
    garnishIds: [],
    ingredientIds: [],
    tasteIds: []
  }
  componentDidMount = () => {
    API.getAllGarnishes().then(allGarns => {
      const libGarnishes = [{ name: 'Garnishes', id: 0, children: allGarns }]
      this.setState({
        lib: {
          ...this.state.lib,
          garnishLib: libGarnishes,
          garnishesLoaded: true
        }
      })
    })
    API.getAllIngredients().then(allIngs => {
      const libIngs = [{ name: 'Ingredients', id: 0, children: allIngs }]
      this.setState({
        lib: {
          ...this.state.lib,
          ingredientLib: libIngs,
          ingredientsLoaded: true
        }
      })
    })
    API.getAllTastes().then(allTastes => {
      const libTastes = [{ name: 'Tastes', id: 0, children: allTastes }]
      this.setState({
        lib: {
          ...this.state.lib,
          tasteLib: libTastes,
          tastesLoaded: true
        }
      })
    })
  }

  garnishSelectorChangeHandler = garnishIds => {
    if (garnishIds.length > 9)
      return alert(
        'A maximum of 9 garnishes can be used on a single cocktial (less is more)'
      )
    this.setState({ garnishIds })
  }
  ingredientSelectorChangeHandler = ingredientIds => {
    this.setState({ ingredientIds })
  }
  tasteSelectorChangeHandler = tasteIds => {
    this.setState({ tasteIds })
  }
  getGarnishObjects = () => {
    return this.state.lib.garnishLib[0].children.filter(garnish =>
      this.state.garnishIds.includes(garnish.id)
    )
  }

  render() {
    return (
      <View style={common.cocktailContainer}>
        <View style={common.cocktailGrapahicContainer}>
          {/* {this.state.garnishIds.length !== 0 && this.getGarnishObjects()} */}
          {this.state.garnishIds.length !== 0 && (
            <GarnishList garnishes={this.getGarnishObjects()} />
          )}
          {/* <CocktailGraphic
              height={150}
              ingredients={cocktail_ingredients}
              glass='rock'
            /> */}
          {this.state.lib.garnishesLoaded && (
            <ItemSelector
              name='Garnish'
              items={this.state.lib.garnishLib}
              onSelectedItemsChange={this.garnishSelectorChangeHandler}
              selectedItems={this.state.garnishIds}
            />
          )}
          {this.state.lib.ingredientsLoaded && (
            <ItemSelector
              name='Ingredients'
              items={this.state.lib.ingredientLib}
              onSelectedItemsChange={this.ingredientSelectorChangeHandler}
              selectedItems={this.state.ingredientIds}
            />
          )}
          {this.state.lib.tastesLoaded && (
            <ItemSelector
              name='Tastes'
              items={this.state.lib.tasteLib}
              onSelectedItemsChange={this.tasteSelectorChangeHandler}
              selectedItems={this.state.tasteIds}
              hideSearch
            />
          )}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1
  }
})
export default CocktailCreatorScreen
