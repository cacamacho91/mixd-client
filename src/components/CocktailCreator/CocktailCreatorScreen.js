import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Icon } from 'react-native-elements'
import { commonStyles as common } from '../../../style/common.style'
import GarnishList from '../SharedCocktailComponents/GarnishList'
import CocktailGraphic from '../SharedCocktailComponents/CocktailGraphic'
import API from '../../adapters/API'
import ItemSelector from './ItemSelector'
import Taste from '../SharedCocktailComponents/Taste'
import PartPicker from './PartPicker'

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
    tasteIds: [],
    cocktailIngredients: [] //used to store the parts
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
    if (garnishIds.length > 9) {
      return alert(
        'A maximum of 9 garnishes can be used on a single cocktial (less is more)'
      )
    }
    this.setState({ garnishIds })
  }
  ingredientSelectorChangeHandler = ingredientIds => {
    if (ingredientIds.length > 10) {
      return alert(
        'We love ambition in an aspiring bar person but the limit is 10 ingredeints per cocktail!'
      )
    }
    let ingObjs = []

    ingredientIds.map(ingId =>
      ingObjs.push({
        parts: 1,
        ingredient: this.state.lib.ingredientLib[0].children.find(
          ing => ing.id === ingId
        )
      })
    )

    this.setState({ ingredientIds, cocktailIngredients: ingObjs })
  }
  tasteSelectorChangeHandler = tasteIds => {
    if (tasteIds.length > 4) {
      return alert('A maximum of 4 tastes can be used on a single cocktail')
    }
    this.setState({ tasteIds })
  }
  getGarnishObjects = () =>
    this.state.lib.garnishLib[0].children.filter(garnish =>
      this.state.garnishIds.includes(garnish.id)
    )
  getTasteObjects = () =>
    this.state.lib.tasteLib[0].children.filter(taste =>
      this.state.tasteIds.includes(taste.id)
    )
  getIngredientObjects = () =>
    this.state.lib.ingredientLib[0].children.filter(ing =>
      this.state.ingredientIds.includes(ing.id)
    )

  render() {
    return (
      <ScrollView>
        <View style={common.cocktailContainer}>
          <View style={common.cocktailGrapahicContainer}>
            {this.state.garnishIds.length !== 0 && (
              <GarnishList garnishes={this.getGarnishObjects()} />
            )}
            <CocktailGraphic
              height={150}
              ingredients={this.state.cocktailIngredients}
              glass='rock'
            />
            <View style={common.tasteRow}>
              {this.state.tasteIds.length !== 0 &&
                this.getTasteObjects().map((taste, idx) => (
                  <Taste {...taste} key={idx} />
                ))}
            </View>
            {this.state.lib.garnishesLoaded && (
              <ItemSelector
                name='Garnish'
                items={this.state.lib.garnishLib}
                onSelectedItemsChange={this.garnishSelectorChangeHandler}
                selectedItems={this.state.garnishIds}
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
            {this.state.lib.ingredientsLoaded && (
              <ItemSelector
                name='Ingredients'
                items={this.state.lib.ingredientLib}
                onSelectedItemsChange={this.ingredientSelectorChangeHandler}
                selectedItems={this.state.ingredientIds}
              />
            )}
            {this.state.cocktailIngredients.length !== 0 &&
              this.state.cocktailIngredients.map((ingObj, idx) => (
                <PartPicker key={idx} ingObj={ingObj} />
              ))}
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1
  }
})
export default CocktailCreatorScreen
